const moodleApi = 'https://dl.nure.ua/';
const XDLApi ='https://xdl.leoit.dev/';

class App {
    constructor() {
        importScripts('../lib/dark.js');

        this.logger = new Logger();
        this.storage = new Storage();
        this.parser = new Parser();
        this.auth = new Auth();
        this.online = new Online();
        this.attendance = new Attendance();

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => this.onMessage(request, sender, sendResponse));
        chrome.alarms.onAlarm.addListener((alarm) => this.onAlarm(alarm));
    }

    async run(sesskey = false) {
        try {
            this.logger.log("Background.js loading...");

            if(!sesskey) {
                sesskey = await this.auth.obtainSesskey();
                await this.storage.setValue("sesskey", sesskey);
            }
    
            const localStorage = await this.storage.getValue(null);
            if(!localStorage || !localStorage["sesskey"] || localStorage["sesskey"] == 'undefined')
                return;
    
            if(!localStorage["attendanceTimeout"]) {
                await this.storage.setValue("attendanceTimeout", 5);
            }
            
            console.log(localStorage);
    
            this.parser.updateAttendanceId();
        
            this.stopAutoAttendanceThread();
            this.stopExtendOnlineThread();
            this.startAutoAttendanceThread();
            this.startExtendOnlineThread();
        
            if(localStorage["sExtendOnline"] == true || localStorage["sAutoAttendance"] == true) {
                this.online.setOnlineFunctions(false);
            }

            this.logger.log("Background.js loaded.");
        } catch (err) {
            this.logger.log(`Error in main: ${err}`);
        }
    }

    async startAutoAttendanceThread() {
        const autoAttendance = await this.storage.getValue("autoAttendance");
        const attendanceTimeout = await this.storage.getValue("attendanceTimeout");
        if(autoAttendance == true) {
            this.logger.log(`AutoAttendance thread started.`);
            this.attendance.updateAttendanceList();
            chrome.alarms.create("autoAttendanceThread", {delayInMinutes: 0.1, periodInMinutes: attendanceTimeout} );
        }
    }
    
    async startExtendOnlineThread() {
        const extendOnline = await this.storage.getValue("extendOnline");
        if(extendOnline == true) {
            this.logger.log(`ExtendOnline thread started.`);
            chrome.alarms.create("extendOnlineThread", {delayInMinutes: 0.1, periodInMinutes: 5});
        }
    }
    
    stopAutoAttendanceThread() {
        chrome.alarms.clear("autoAttendanceThread");
        this.logger.log(`AutoAttendance thread stopped.`);
    }
    
    stopExtendOnlineThread() {
        chrome.alarms.clear("extendOnlineThread");
        this.logger.log(`ExtendOnline thread stopped.`);
    }
    
    async sendLoginState() {
        try {
            const auth = await this.auth.extendLoginTimeout();
    
            let state = false;
            if(auth && !auth[0].error) {
                state = true;
                this.logger.log(`User is authorized`);
            }
            chrome.runtime.sendMessage({greeting: "setLoginState", state: state});
        } catch(err) {
            this.logger.log(`Failed to send login state: ${err}`);
            return false;
        }
    }
    
    onAlarm(alarm) {
        if(alarm.name == "autoAttendanceThread") {
            this.attendance.updateAttendanceList();
        }
    
        if(alarm.name == "extendOnlineThread") {
            this.auth.extendLoginTimeout();
        }
    }
    
    onMessage(request, sender, sendResponse) {
        switch(request.greeting) {
            case 'saveSettings': this.saveSettings(request, sendResponse); break;
            case 'getSettings': this.getSettings(request, sendResponse); break;
            case 'saveAttendanceTimeout': this.saveAttendanceTimeout(request, sendResponse); break;
            case 'saveAuth': this.saveAuth(request, sendResponse); break;
            case 'checkLoginState': this.checkLoginState(request, sendResponse); break;
            case 'sync': this.online.setOnlineFunctions('sync'); break;
            case 'resetData': this.storage.clearStorage();
        }
    
        return true;
    }

    saveSettings(request, sendResponse) {
        let localStorage = {};

        this.storage.getValue(null).then(lsBackup => {
            let isOffline = false;

            for (let key in request.settings) {
                localStorage[key] = request.settings[key];
            }
            this.storage.setValue(null, localStorage, true);
    
            if(lsBackup["autoAttendance"] != localStorage["autoAttendance"]) {
                this.stopAutoAttendanceThread();
                this.startAutoAttendanceThread();
                isOffline = true;
            }
    
            if(lsBackup["extendOnline"] != localStorage["extendOnline"]) {
                this.stopExtendOnlineThread();
                this.startExtendOnlineThread();
                isOffline = true;
            }
    
            if(lsBackup["darkMode"] != localStorage["darkMode"]) {
                try {
                    chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
                        const tabId = tabs[0].id;
                        const darkMode = await this.storage.getValue("darkMode");
                        const message = {
                            greeting: "setDarkMode", 
                            dark: darkMode, 
                            css: getDarkCSS()
                        }

                        chrome.tabs.sendMessage(tabId, message, (resp) => {
                            const lastError = chrome.runtime.lastError;
                            if(lastError) {
                                this.logger.log(lastError.message);
                                return;
                            }
                        });
                    });
                    
                    isOffline = true;
                } catch (err) {
                    console.log(`Error while sending message on the tab: ${err}`);
                }
                return;
            }
    
            if(!isOffline) {
                sendResponse({animate: true});
                this.online.setOnlineFunctions();
            }
    
            sendResponse({farewell: "✔️ Сохранено"});
        });
    }

    getSettings(request, sendResponse) {
        this.storage.getValue(null).then(settings => {
            sendResponse({settings: settings})
        });
    }

    saveAttendanceTimeout(request, sendResponse) {
        this.storage.setValue("attendanceTimeout", request.timeout).then(() => {
            sendResponse({farewell: "OK"});
        });
    }

    saveAuth(request, sendResponse) {
        if(request.auth && request.auth.sesskey && request.auth.session) {
            this.storage.getValue("sesskey").then(sesskey => {
                if(sesskey != request.auth.sesskey) {
                    this.storage.setValue("sesskey", request.auth.sesskey);
                    this.logger.log(`Received new session key: ${request.auth.sesskey}`);
                    this.run();
                }
            });

            this.storage.getValue("session").then(session => {
                if(session != request.auth.session) {
                    this.storage.setValue("session", request.auth.session);
                    this.logger.log(`Received new session: ${request.auth.session}`);
                }
            });

            sendResponse({farewell: "OK"});
        } else {
            sendResponse({farewell: "FAIL"});
        }
    }

    checkLoginState(request, sendResponse) {
        this.sendLoginState();
    }
}