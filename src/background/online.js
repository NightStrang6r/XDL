importScripts('../lib/crypt.js');

class Online {
    constructor() {
        this.storage = new Storage();
        this.logger = new Logger();
        this.parser = new Parser();
    }

    async setOnlineFunctions(request = 'save') {
        try {
            const localStorage = await this.storage.getValue(null);
            const formData = new URLSearchParams();
            let h = "";
        
            for(let key in localStorage) {
                if(key == 'length') break;
                formData.append(key, localStorage[key]);
                h += localStorage[key];
            }
        
            formData.append("h", crypt(h));
        
            const url = `${XDLApi}runner/`;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formData
            };
            const response = await fetch(url, options);
    
            if (!response.ok) {
                this.logger.log(`Не удалось отправить запрос онлайн функций.`);
    
                if(request) {
                    chrome.runtime.sendMessage({greeting: "setLoading", farewell: "❌ Ошибка", animate: false});
                }
                
                throw new Error('Fetch error: Failed to get AttendanceId.');
            }
    
            let data = await response.text();
            this.logger.log(`Запрос онлайн функций на сервер отправлен. Ответ: ${data}`);

            data = JSON.parse(data);
            const sync = await this.saveSyncData(data);
    
            if(request && request == 'save') {
                chrome.runtime.sendMessage({greeting: "setLoading", farewell: "✔️ Сохранено", animate: false, sync: sync});
            } else if(request && request == 'sync') {
                chrome.runtime.sendMessage({greeting: "setLoading", farewell: "✔️ Синхронизировано", animate: false, sync: sync});
            }
        } catch (err) {
            this.logger.log(`Failed to setOnlineFunctions: ${err}`);
        }
    }

    async saveSyncData(data) {
        if(!data.sync) return false;

        try {
            const sync = data.sync;

            if(sync.error) return false;

            if(sync.telegramNotify == false || sync.telegramNotify == true)
                await this.storage.setValue('telegramNotify', sync.telegramNotify);
            
            await this.storage.setValue('sAutoAttendance', sync.sAutoAttendance);
            await this.storage.setValue('sExtendOnline', sync.sExtendOnline);
            await this.storage.setValue('visitNotify', sync.visitNotify);
            await this.storage.setValue('version', sync.version);
            await this.storage.setValue('chromeWebStore', sync.chromeWebStore);

            return sync;
        } catch (err) {
            this.logger.log(`Failed to saveSyncData: ${err}`);
            return false;
        }
    }

    async sendAttendanceMail(link) {
        try {
            const localStorage = await this.storage.getValue(null);
        
            if(localStorage["visitNotify"] != 'true')
                return;
    
            if(!localStorage["mail"] || localStorage["mail"] === undefined || !localStorage["session"]) {
                this.logger.log(`Not enough data to send mail.`);
                return;
            }
        
            if(!localStorage["userId"]) {
                localStorage["userId"] = this.parser.getUserId();
            }
        
            const url = `${XDLApi}mail/`;
            const body = new FormData();
            body.append('e', localStorage["mail"]);
            body.append('l', link);
            body.append('s', localStorage["session"]);
            body.append('u', localStorage["userId"]);
            body.append('h', this.genHash(localStorage["mail"], link, localStorage["session"], localStorage["userId"]));
    
            const options = {
                method: 'POST',
                body: body
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Fetch error: Failed to sendAttendanceMail.');
            }
            const data = await response.text();
        
            this.logger.log(`Запрос об отправке письма на почту ${localStorage["mail"]} отправлен. Ответ: ${data}`);
        } catch (err) {
            this.logger.log(`Failed to sendAttendanceMail: ${err}`);
        }
    }

    genHash() {
        let h = "";
        for(let i = 0; i < arguments.length; i++) {
            h += arguments[i];
        }
        return crypt(h);
    }
}