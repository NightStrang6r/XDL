const debug = true;

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
        this.settings = await this.getSettings();
    
        this.log(`>XDL: Settings loaded from background:`);
        this.log(this.settings);

        if(!this.settings) return;

        if(this.settings.darkMode == true) {
            this.setDarkMode(true);
        } else {
            this.setDarkMode(false);
        }
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
    
            this.log(`>XDL: Successfully obtained auth.`);
        } catch(err) {
            this.log(`>XDL: Failed to obtain auth. Error: ${err}`);
        }
        return {session, sesskey};
    }
    
    getSettings() {
        let settings = new Promise (resolve => {
            try {
                chrome.runtime.sendMessage({greeting: "getSettings"}, 
                resp => {
                    this.messageErrorHandler();
                    resolve(resp.settings);
                });
            } catch(err) {
                this.log(`>XDL: Error in getSettings: ${err}`);
            }
        });
        
        return settings;
    }
    
    saveAuth(auth) {
        let response = new Promise (resolve => {
            try {
                chrome.runtime.sendMessage({greeting: "saveAuth", auth: auth},
                resp => {
                    this.messageErrorHandler();
                    resolve(resp.farewell);
                });
            } catch (err) {
                this.log(`>XDL: Error in saveAuth: ${err}`);
            }
        });
        
        return response;
    }
    
    async setDarkMode(on) {
        if(on) {
            localStorage["XDLDarkMode"] = true;

            const style = document.createElement("style");
            style.classList.add("darkMode");
            style.innerHTML = localStorage["XDLDarkCSS"];
    
            while(document.head == null) await this.sleep(1);
    
            document.lastElementChild.appendChild(style);
        } else {
            localStorage["XDLDarkMode"] = false;

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
                this.setDarkMode(false);
            }
        }
        sendResponse({farewell: "OK"});
    }

    messageErrorHandler() {
        const lastError = chrome.runtime.lastError;
        if(lastError) {
            this.logger.log(lastError.message);
            return;
        }
    }
}