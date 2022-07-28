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
                    chrome.runtime.sendMessage({greeting: "setLoading", farewell: "❌ Ошибка", animate: false}, () => this.messageErrorHandler());
                }
                
                throw new Error('Fetch error: Failed to get AttendanceId.');
            }
    
            let data = await response.text();
            this.logger.log(`Запрос онлайн функций на сервер отправлен. Ответ: ${data}`);

            data = JSON.parse(data);
            const sync = await this.saveSyncData(data);
    
            if(request && request == 'save') {
                chrome.runtime.sendMessage(
                    {
                        greeting: "setLoading", 
                        farewell: "✔️ Сохранено", 
                        animate: false, 
                        sync: sync
                    }, 
                    () => this.messageErrorHandler());
            } else if(request && request == 'sync') {
                chrome.runtime.sendMessage(
                    {
                        greeting: "setLoading", 
                        farewell: "✔️ Синхронизировано", 
                        animate: false, 
                        sync: sync
                    }, 
                    () => this.messageErrorHandler());
            }
        } catch (err) {
            this.logger.log(`Failed to setOnlineFunctions: ${err}`);
            chrome.runtime.sendMessage({greeting: "setLoading", farewell: "❌ Ошибка", animate: false}, () => this.messageErrorHandler());
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

    async sendAttendanceNotify(link) {
        try {
            const settings = await this.storage.getValue(null);
        
            if(settings["visitNotify"] != true)
                return;
    
            if(settings["telegramNotify"] != true) {
                this.logger.log(`Telegram notify is not enabled.`);
                return;
            }
        
            if(!settings["userId"]) {
                settings["userId"] = this.parser.getUserId();
            }
        
            const url = `${XDLApi}notify/send`;
            const body = new URLSearchParams();
        
            body.append('userId', settings["userId"]);
            body.append('session', settings["session"]);
            body.append('sesskey', settings["sesskey"]);
            body.append('link', link);
    
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: body
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Fetch error: Failed to sendAttendanceNotify.');
            }
            const data = await response.text();
        
            this.logger.log(`Request to send notify is sent. Response: ${data}`);
        } catch (err) {
            this.logger.log(`Failed to sendAttendanceNotify: ${err}`);
        }
    }

    messageErrorHandler() {
        const lastError = chrome.runtime.lastError;
        if(lastError) {
            this.logger.log(lastError.message);
            return;
        }
    }
}