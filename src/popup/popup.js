const XDLApi ='https://xdl.leoit.dev/';

export default class Popup {
    constructor() {
        this.menu = document.getElementById("menu");
        this.checkboxes = document.getElementsByClassName("custom-checkbox");
        this.loginButton = document.getElementById("login-button");
        this.emailButton = document.getElementById("email-button");
        this.telegramButton = document.getElementById("telegram-button");
        this.settingsButton = document.getElementById("settings-button");
        this.attendanceTimeout = document.getElementById("attendance-timeout");
        this.syncButton = document.getElementById("sync-button");
        this.updateButton = document.getElementById("update-button");
        
        this.websiteMenu = document.getElementById("website-menu");
        this.telegramMenu = document.getElementById("telegram-menu");
        this.settingsMenu = document.getElementById("settings-menu");
        this.donationMenu = document.getElementById("donation-menu");
        
        this.settings = new Object;
        this.msgUITimeout = null;

        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => this.onMessage(request, sender, sendResponse));
    }

    run() {
        this.restoreSettings();
        this.sendLoginStateRequest();

        this.setupListeners();
    }

    setupListeners() {
        for(let i = 0; i < this.checkboxes.length; i++){
            this.checkboxes[i].addEventListener("input", (el) => this.saveSettings(el));
        }

        window.onclick = (event) => { this.closeMenuIU(event) };

        this.menu.addEventListener("click", () => this.showMenuUI());
        this.loginButton.addEventListener("click", () => this.openTab("https://dl.nure.ua/login/"));
        this.emailButton.addEventListener("click", () => this.updateEmailInput());
        this.telegramButton.addEventListener("click", () => this.onTelegramButton());
        this.settingsMenu.addEventListener("click", () => this.viewSettingsUI(true));
        this.settingsButton.addEventListener("click", () => this.viewSettingsUI(false));
        this.attendanceTimeout.addEventListener("input", () => this.saveAttendanceTimeoutInput());
        this.syncButton.addEventListener("click", () => this.onSyncButtonClick());

        this.websiteMenu.addEventListener("click", () => this.openTab("https://xdl.leoit.dev"));
        this.telegramMenu.addEventListener("click", () => this.openTab("https://t.me/+X3pPK2R2YFw2YmIy"));
        this.donationMenu.addEventListener("click", () => this.openTab("https://www.donationalerts.com/r/nightstranger"));
        this.updateButton.addEventListener("click", () => this.openTab(this.settings.chromeWebStore))
    }

    restoreSettings() {
        chrome.runtime.sendMessage({greeting: "getSettings"},
            (response) => this.restore(response)
        );
    }

    restore(response) {
        this.settings = {...response.settings};
        console.log(this.settings);

        for(let i = 0; i < this.checkboxes.length; i++) {
            if(this.settings[`${this.checkboxes[i].name}`] == true) {
                this.checkboxes[i].checked = true;
            } else {
                this.checkboxes[i].checked = false;
            }
        }
        
        this.setTelegramButton();
        this.setUpdateButton();
        this.attendanceTimeout.value = this.settings["attendanceTimeout"];
    }
    
    sendLoginStateRequest() {
        chrome.runtime.sendMessage({greeting: "checkLoginState"});
    }
    
    setLoginState(state) {
        let main = document.getElementById("main");
        let noLogin = document.getElementById("no-login");
        
        if(!state) {
            $("#main").fadeOut(200, () => {
                main.classList.add("no-view");
                noLogin.classList.remove("no-view");
            });
        }
    }
    
    saveSettings(el) {
        for(let i = 0; i < this.checkboxes.length; i++) {
            this.settings[this.checkboxes[i].name] = this.checkboxes[i].checked;
        }
    
        if(el.srcElement.name == "visitNotify" && el.srcElement.checked == true) {
            this.updateEmailInput();
        }
    
        chrome.runtime.sendMessage({greeting: "saveSettings", settings: this.settings}, (response) => this.msgUI(response));
    }
    
    saveAttendanceTimeoutInput() {
        let input = +this.attendanceTimeout.value;
        chrome.runtime.sendMessage({greeting: "saveAttendanceTimeout", timeout: input});
    }
    
    msgUI(response) {
        if(!response) return;
    
        if(response.animate) {
            this.loadingAnimationUI();
            return;
        }
    
        if(document.getElementById("res")){
            $("#res").fadeIn(1);
            document.getElementById("res").innerHTML = response.farewell;
            clearTimeout(this.msgUITimeout);
            this.msgUITimeout = setTimeout(() => {
                $("#res").fadeOut(800);
            }, 500);
        }
    }
    
    viewSettingsUI(param) {
        let main = document.getElementById("main");
        let noLogin = document.getElementById("no-login");
        let settings = document.getElementById("settings");
    
        if(param) {
            main.classList.add("no-view");
            noLogin.classList.add("no-view");
            settings.classList.remove("no-view");
        } else {
            main.classList.remove("no-view");
            //noLogin.classList.remove("no-view");
            settings.classList.add("no-view");
        }
    }
    
    getArrString(arr) {
        let str = "";
        for (var key in arr) {
            str += "Ключ: " + key + " значение: " + arr[key] + "\n";
        }
        return str;
    }
    
    updateEmailInput() {
        let emailInput = $(".text-field")[0];
        this.emailButton.classList.toggle('arrow-top');
        this.emailButton.classList.toggle('arrow-bottom');
        if(emailInput.style.display == "none") {
            emailInput.style.display = "block";
        } else {
            emailInput.style.display = "none";
        }
    }
    
    openTab(url) {
        chrome.tabs.create({
            url: url
        });
    }
    
    showMenuUI() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    
    closeMenuIU(event) {
        if (!event.target.matches('#menu')) {
    
            let dropdowns = document.getElementsByClassName("dropdown-content");
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    
    loadingAnimationUI(stop = false) {
        if(stop) {
            clearInterval(this.msgUITimeout);
            document.getElementById("res").innerHTML = "";
            return;
        }
    
        this.loopAnimationUI();
    }
    
    loopAnimationUI() {
        const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

        document.getElementById("res").innerHTML = f[Math.floor((Date.now()/100)%f.length)];
        this.msgUITimeout = setTimeout(() => (this.loopAnimationUI()), 50);
    }

    setUpdateButton() {
        this.versionText = document.getElementById("header-version");
        console.log(`v${this.settings.version} != ${this.versionText.innerHTML}`);
        if(`v${this.settings.version}` != this.versionText.innerHTML) {
            this.updateButton.style.visibility = 'visible';
        }
    }

    setTelegramButton() {
        if(this.settings.telegramNotify == true) {
            this.telegramButton.innerHTML = 'Отключить';
            this.telegramButton.style.backgroundColor = '#68ad1b';
            this.telegramButton.dataset.subscribe = 'false';
        }
    }

    onTelegramButton() {
        let subscribe = 'subscribe';

        if(this.telegramButton.dataset.subscribe == 'false') {
            subscribe = 'unsubscribe';
        }

        const url = XDLApi + 'notify/' + subscribe + '?telegram=1' + '&userId=' + this.settings.userId + '&session=' + this.settings.session + '&sesskey=' + this.settings.sesskey;
        this.openTab(url);
    }

    onSyncButtonClick() {
        chrome.runtime.sendMessage({greeting: "sync"});
        this.loadingAnimationUI();
    }
    
    onMessage(request, sender, sendResponse) {
        if (request.greeting == "setLoginState") {
            this.setLoginState(request.state);
            sendResponse({farewell: "OK"});
            return;
        }
    
        if (request.greeting == "setLoading") {
            this.loadingAnimationUI(true);
            this.msgUI(request);
            sendResponse({farewell: "OK"});
            return;
        }

        if (request.greeting == "sync") {
            this.loadingAnimationUI(true);
            this.msgUI(request);
            this.restoreSettings();
            sendResponse({farewell: "OK"});
            return;
        }
    }
}