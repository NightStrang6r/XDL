class Auth {
    constructor() {
        this.logger = new Logger();
        this.storage = new Storage();
    }

    async obtainSesskey() {
        let sesskey;
        
        try {
            const options = {
                method: 'GET'
            };
            const response = await fetch(`${moodleApi}my/`, options);
            if (!response.ok) {
                throw new Error('Fetch error: Failed to get UserId.');
            }
            const data = await response.text();
            const link = "https://dl.nure.ua/login/logout.php?sesskey=";
            const linkPos = data.indexOf(link);
    
            if(linkPos != -1) {
                sesskey = "";
                for(let i = linkPos + link.length; i < data.length; i++) {
                    if(data[i] == `"`) break;
                    sesskey += data[i];
                }
            }
    
            if(sesskey && sesskey != undefined) {
                this.logger.log(`Successfully obtained session key: ${sesskey}`);
            } else {
                this.logger.log(`Failed to obtain sesskey: user need to log in DL.`);
            }
        } catch(err) {
            this.logger.log(`Failed to obtain sesskey. Error: ${err}`);
        }

        return sesskey;
    }

    async extendLoginTimeout() {
        try {
            const sesskey = await this.storage.getValue("sesskey");
            if(!sesskey) {
                this.logger.log(`Failed to extendLoginTimeout: no sesskey provided`);
                return;
            }
        
            const url = `${moodleApi}lib/ajax/service.php?sesskey=${sesskey}&info=core_session_touch`;
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: '[{"index":0,"methodname":"core_session_touch","args":{}}]'
            };
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Fetch error: Failed to extendLoginTimeout.');
            }
            const data = await response.json();
    
            if(!data[0].error) {
                this.logger.log(`Login timeout updated`);
            } else {
                this.logger.log(`Failed to extendLoginTimeout: response error`);
            }
    
            return data;
        } catch (err) {
            this.logger.log(`Failed to extendLoginTimeout: ${err}`);
        }
    }
}