const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://leoitdev.ru/api/XDL/";

log(">XDL: Main.js loading...");

let sesskey = obtainSesskey();
let settings;

Main();

async function Main() {
    settings = await getSettings();

    log(`>XDL: Settings loaded:`);
    log(settings);

    if(sesskey) {
        await saveSesskey(sesskey);
    }

    log(">XDL: Main.js loaded.");
}

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

function obtainSesskey() {
    let sesskey;
    try {
        let logoutLink = document.getElementsByClassName("logininfo")[0].lastElementChild.href;
        sesskey = logoutLink.split('=')[1];
        log(`>XDL: Successfully obtained session key: ${sesskey}`);
    } catch(err) {
        log(`>XDL: Failed to obtain sesskey. Error: ${err}`, true);
    }
    return sesskey;
}

function getSettings() {
    let settings = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "getSettings"}, 
        resp => resolve(resp.settings));
    });
    
    return settings;
}

function saveSesskey(sesskey) {
    let response = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "saveSesskey", sesskey: sesskey},
        resp => resolve(resp.farewell));
    });
    
    return response;
}

/* FUNCTIONS */