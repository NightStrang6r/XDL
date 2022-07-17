async function importScripts(src) {
    const url = chrome.runtime.getURL(src);
    const contentMain = await import(url);
}

async function setDarkMode() {
    const style = document.createElement("style");
    style.classList.add("darkMode");
    style.innerHTML = localStorage["XDLDarkCSS"];

    while(document.head == null) await this.sleep(1);

    document.head.appendChild(style);
}

async function sleep(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

if(localStorage["XDLDarkMode"] == true)
    setDarkMode();
    
importScripts("content/index.js");