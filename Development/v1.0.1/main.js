const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";

log(">XDL: Main.js loading...");

let settings;

Main();

async function Main() {
    settings = await getSettings();

    log(`>XDL: Settings loaded:`);
    log(settings);

    let auth = obtainAuth();
    if(!auth || !auth.session || !auth.sesskey) {
        return;
    }

    await saveAuth(auth);
}

log(">XDL: Main.js loaded.");

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

function saveAuth(auth) {
    let response = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "saveAuth", auth: auth},
        resp => resolve(resp.farewell));
    });
    
    return response;
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

/* FUNCTIONS */