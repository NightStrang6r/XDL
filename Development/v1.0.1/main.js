const debug = true;
const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";
let settings;

log(">XDL: main.js loading...");

document.onload = main();
document.addEventListener("DOMContentLoaded", ready);
chrome.runtime.onMessage.addListener(onMessage);

async function main() {
    settings = getLocalSettings();
    if(settings && settings.darkMode == 'true' || settings.darkMode == true) {
        setDarkMode(true);
    }
    
    settings = await getSettings();
    saveLocalSettings(settings);

    log(`>XDL: Settings loaded:`);
    log(settings);
}

async function ready() {
    let auth = obtainAuth();
    if(!auth || !auth.session || !auth.sesskey) {
        return;
    }

    await saveAuth(auth);
}

log(">XDL: main.js loaded.");

/* FUNCTIONS */

function log(msg, err = false) {
    if(debug) {
        if(!err) {
            console.log(msg);
        } else {
            console.error(msg);
        }
    }
}

function obtainAuth() {
    let session, sesskey;
    try {
        let logoutLink = document.getElementsByClassName("logininfo")[0].lastElementChild.href;
        sesskey = logoutLink.split('=')[1];
        session = getCookie('MoodleSession');
        if(!sesskey) {
            log(`>XDL: Failed to obtain sesskey. Sesskey: ${sesskey}`);
            return {session, sesskey};
        }
        if(!session) {
            log(`>XDL: Failed to obtain session. Session: ${session}`);
            return {session, sesskey};
        }
        log(`>XDL: Successfully obtained auth: ${session}, ${sesskey}`);
    } catch(err) {
        log(`>XDL: Failed to obtain auth. Error: ${err}`);
    }
    return {session, sesskey};
}

function getSettings() {
    let settings = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "getSettings"}, 
        resp => resolve(resp.settings));
    });
    
    return settings;
}

function getLocalSettings() {
    let settings;
    if(localStorage["XDLSettings"]) {
        try {
            settings = JSON.parse(localStorage["XDLSettings"]);
        } catch(err) {
            log(`>XDL: Ошибка при парсинге настроек: ${err}`);
            settings = false;
        }
    }
    return settings;
}

function saveLocalSettings(settings) {
    localStorage["XDLSettings"] = JSON.stringify(settings);
}

function saveAuth(auth) {
    let response = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "saveAuth", auth: auth},
        resp => resolve(resp.farewell));
    });
    
    return response;
}

async function setDarkMode(on) {
    if(on) {
        const style = document.createElement("style");
        style.classList.add("darkMode");
        style.innerHTML = `html, body, body :not(iframe) {
            background-color: #181a1b !important;
            border-color: #776e62 !important;
            color: #e8e6e3 !important;
        }`;
        document.firstElementChild.appendChild(style);
    } else {
        const style = document.querySelector(".darkMode");
        if(style != null) {
            style.remove();
        }
    }
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function onMessage(request, sender, sendResponse) {
    if (request.greeting == "setDarkMode") {
        if(request.dark == 'true') {
            settings.darkMode = true;
            setDarkMode(true);
        } else {
            settings.darkMode = false;
            setDarkMode(false);
        }
        saveLocalSettings(settings);
    }
}
/* FUNCTIONS */