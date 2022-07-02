const debug = true;
const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";

export default class Content {
    constructor() {
        this.log(">XDL: main.js loading...");

        this.settings = null;

        document.onload = this.main();
        document.addEventListener("DOMContentLoaded", () => this.ready());
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => this.onMessage(request, sender, sendResponse));

        this.log(">XDL: main.js loaded.");
    }
    
    async main() {
        this.settings = this.getLocalSettings();
        if(this.settings && (this.settings.darkMode == 'true' || this.settings.darkMode == true)) {
            //this.setDarkMode(true);
        }
    
        this.log(`>XDL: Local settings:`);
        this.log(this.settings);
        
        this.settings = await this.getSettings();
        this.saveLocalSettings(this.settings);
    
        this.log(`>XDL: Settings loaded from background:`);
        this.log(this.settings);
    }

    async ready() {
        let auth = this.obtainAuth();
        if(!auth || !auth.session || !auth.sesskey) {
            return;
        }

        await this.saveAuth(auth);
    }

    log(msg, err = false) {
        if(debug) {
            if(!err) {
                console.log(msg);
            } else {
                console.error(msg);
            }
        }
    }
    
    obtainAuth() {
        let session, sesskey;
        try {
            let logoutLink = document.getElementsByClassName("logininfo")[0].lastElementChild.href;
            sesskey = logoutLink.split('=')[1];
            session = this.getCookie('MoodleSession');
    
            if(!sesskey) {
                this.log(`>XDL: Failed to obtain sesskey. Sesskey: ${sesskey}`);
                return {session, sesskey};
            }
    
            if(!session) {
                this.log(`>XDL: Failed to obtain session. Session: ${session}`);
                return {session, sesskey};
            }
    
            this.log(`>XDL: Successfully obtained auth: ${session}, ${sesskey}`);
        } catch(err) {
            this.log(`>XDL: Failed to obtain auth. Error: ${err}`);
        }
        return {session, sesskey};
    }
    
    getSettings() {
        let settings = new Promise (resolve => {
            chrome.runtime.sendMessage({greeting: "getSettings"}, 
            resp => resolve(resp.settings));
        });
        
        return settings;
    }
    
    getLocalSettings() {
        let settings;
        if(localStorage["XDLSettings"]) {
            try {
                settings = JSON.parse(localStorage["XDLSettings"]);
            } catch(err) {
                this.log(`>XDL: Ошибка при парсинге настроек: ${err}`);
                settings = false;
            }
        }
        return settings;
    }
    
    saveLocalSettings(settings) {
        localStorage["XDLSettings"] = JSON.stringify(settings);
    }
    
    saveAuth(auth) {
        let response = new Promise (resolve => {
            chrome.runtime.sendMessage({greeting: "saveAuth", auth: auth},
            resp => resolve(resp.farewell));
        });
        
        return response;
    }
    
    async setDarkMode(on) {
        if(on) {
            const style = document.createElement("style");
            style.classList.add("darkMode");
            style.innerHTML = localStorage["XDLDarkCSS"];
    
            while(document.head == null) await this.sleep(1);
    
            document.lastElementChild.appendChild(style);
        } else {
            const style = document.querySelector(".darkMode");
            if(style != null) {
                style.remove();
            }
        }
    }
    
    async sleep(timeout) {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    
    getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    onMessage(request, sender, sendResponse) {
        if (request.greeting == "setDarkMode") {
            if(request.dark == true) {
                this.settings.darkMode = true;
                localStorage["XDLDarkCSS"] = request.css;
                this.setDarkMode(true);
            } else {
                this.settings.darkMode = false;
                localStorage["XDLDarkCSS"] = '';
                this.setDarkMode(false);
            }
            this.saveLocalSettings(this.settings);
        }
        sendResponse({farewell: "OK"});
    }
}