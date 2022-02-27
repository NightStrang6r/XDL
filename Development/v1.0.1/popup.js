let menu = document.getElementById("menu");
let checkboxes = document.getElementsByClassName("custom-checkbox");
let loginButton = document.getElementById("login-button");
let emailButton = document.getElementById("email-button");
let emaitInput = document.getElementById("email-input");
let settingsButton = document.getElementById("settings-button");
let attendanceTimeout = document.getElementById("attendance-timeout");

let websiteMenu = document.getElementById("website-menu");
let telegramMenu = document.getElementById("telegram-menu");
let settingsMenu = document.getElementById("settings-menu");
let donationMenu = document.getElementById("donation-menu");

let settings = new Object;
let msgUITimeout;

/* Main */
chrome.runtime.onMessage.addListener(onMessage);

restoreSettings();
sendLoginStateRequest();

for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("input", saveSettings);
}

menu.addEventListener("click", showMenuUI);
window.onclick = (event) => { closeMenuIU(event) };
loginButton.addEventListener("click", () => openTab("https://dl.nure.ua/login/"));
emailButton.addEventListener("click", updateEmailInput);
emaitInput.addEventListener("input", saveEmailInput);
settingsMenu.addEventListener("click", () => viewSettingsUI(true));
settingsButton.addEventListener("click", () => viewSettingsUI(false));
attendanceTimeout.addEventListener("input", saveAttendanceTimeoutInput);

websiteMenu.addEventListener("click", () => openTab("https://xdl.leoit.dev"));
telegramMenu.addEventListener("click", () => openTab("https://t.me/+X3pPK2R2YFw2YmIy"));
donationMenu.addEventListener("click", () => openTab("https://www.donationalerts.com/r/nightstranger"));
/* Main */

function restoreSettings(){
    chrome.runtime.sendMessage({greeting: "getSettings"},
        function (response) {
            settings = response.settings;
            for(let i = 0; i < checkboxes.length; i++){
                if(settings[`${checkboxes[i].name}`] == "true"){
                    checkboxes[i].checked = true;
                } else {
                    checkboxes[i].checked = false;
                }
            }
            emaitInput.value = settings["email"];
            attendanceTimeout.value = settings["attendanceTimeout"];
        }
    );
}

function sendLoginStateRequest() {
    chrome.runtime.sendMessage({greeting: "checkLoginState"});
}

function setLoginState(state) {
    let main = document.getElementById("main");
    let noLogin = document.getElementById("no-login");
    
    if(!state) {
        $("#main").fadeOut(200, () => {
            main.classList.add("no-view");
            noLogin.classList.remove("no-view");
        });
    }
}

function saveSettings(el) {
    for(let i = 0; i < checkboxes.length; i++){
        settings[checkboxes[i].name] = checkboxes[i].checked;
    }
    if(emaitInput.value === undefined) {
        settings["email"] = emaitInput.value;
    }

    if(el.srcElement.name == "visitNotify" && el.srcElement.checked == true) {
        updateEmailInput();
    }

    chrome.runtime.sendMessage({greeting: "saveSettings", settings: settings}, msgUI);
}
 
function saveEmailInput() {
    let input = emaitInput.value;
    chrome.runtime.sendMessage({greeting: "saveEmail", email: input});
}

function saveAttendanceTimeoutInput() {
    let input = +attendanceTimeout.value;
    chrome.runtime.sendMessage({greeting: "saveAttendanceTimeout", timeout: input});
}

function msgUI(response) {
    if(!response) return;

    if(response.animate) {
        loadingAnimationUI();
        return;
    }

    if(document.getElementById("res")){
        $("#res").fadeIn(1);
        document.getElementById("res").innerHTML = response.farewell;
        clearTimeout(msgUITimeout);
        msgUITimeout = setTimeout(() => {
            $("#res").fadeOut(800);
        }, 500);
    }
}

function viewSettingsUI(param) {
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

function getArrString(arr) {
    let str = "";
    for (var key in arr) {
        str += "Ключ: " + key + " значение: " + arr[key] + "\n";
    }
    return str;
}

function updateEmailInput() {
    let emailInput = $(".text-field")[0];
    emailButton.classList.toggle('arrow-top');
    emailButton.classList.toggle('arrow-bottom');
    if(emailInput.style.display == "none") {
        emailInput.style.display = "block";
    } else {
        emailInput.style.display = "none";
    }
}

function openTab(url) {
    chrome.tabs.create({
        url: url
    });
}

function showMenuUI() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function closeMenuIU(event) {
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

function loadingAnimationUI(stop = false) {
    if(stop) {
        clearInterval(msgUITimeout);
        document.getElementById("res").innerHTML = "";
        return;
    }

    const f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];

    function loop() {
        document.getElementById("res").innerHTML = f[Math.floor((Date.now()/100)%f.length)];
        msgUITimeout = setTimeout(loop, 50);
    }

    loop();
}

function onMessage(request, sender, sendResponse) {
    if (request.greeting == "setLoginState") {
        setLoginState(request.state);
        return;
    }

    if (request.greeting == "setLoading") {
        loadingAnimationUI(true);
        msgUI(request);
        return;
    }
}