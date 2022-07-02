export default class Popup {
    constructor() {
        this.menu = document.getElementById("menu");
        this.checkboxes = document.getElementsByClassName("custom-checkbox");
        this.loginButton = document.getElementById("login-button");
        this.emailButton = document.getElementById("email-button");
        this.emaitInput = document.getElementById("email-input");
        this.settingsButton = document.getElementById("settings-button");
        this.attendanceTimeout = document.getElementById("attendance-timeout");
        
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
        this.emaitInput.addEventListener("input", () => this.saveEmailInput());
        this.settingsMenu.addEventListener("click", () => this.viewSettingsUI(true));
        this.settingsButton.addEventListener("click", () => this.viewSettingsUI(false));
        this.attendanceTimeout.addEventListener("input", () => this.saveAttendanceTimeoutInput());

        this.websiteMenu.addEventListener("click", () => this.openTab("https://xdl.leoit.dev"));
        this.telegramMenu.addEventListener("click", () => this.openTab("https://t.me/+X3pPK2R2YFw2YmIy"));
        this.donationMenu.addEventListener("click", () => this.openTab("https://www.donationalerts.com/r/nightstranger"));
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
                console.log(true);
            } else {
                this.checkboxes[i].checked = false;
                console.log(false);
            }
        }

        this.emaitInput.value = settings["email"];
        this.attendanceTimeout.value = settings["attendanceTimeout"];
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

        if(this.emaitInput.value === undefined) {
            this.settings["email"] = this.emaitInput.value;
        }
    
        if(el.srcElement.name == "visitNotify" && el.srcElement.checked == true) {
            this.updateEmailInput();
        }
    
        chrome.runtime.sendMessage({greeting: "saveSettings", settings: this.settings}, (response) => this.msgUI(response));
    }
     
    saveEmailInput() {
        let input = this.emaitInput.value;
        chrome.runtime.sendMessage({greeting: "saveEmail", email: input});
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
    }
}