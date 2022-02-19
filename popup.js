let area = document.getElementsByClassName("modal-content")[0];
let checkboxes = document.getElementsByClassName("custom-checkbox");
let loginButton = document.getElementById("login-button");
let emailButton = document.getElementById("email_button");
let emaitInput = document.getElementById("email_input");
let settings = new Object;


chrome.runtime.onMessage.addListener(onMessage);

restoreSettings();
putSavedEmail();
sendLoginStateRequest();

for(let i = 0; i < checkboxes.length; i++){
    checkboxes[i].addEventListener("input", saveSettings);
}

loginButton.addEventListener("click", goToLogin);
emailButton.addEventListener("click", updateEmailInput);
emaitInput.addEventListener("input", saveEmailInput);


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
        }
    );
}

function sendLoginStateRequest() {
    chrome.runtime.sendMessage({greeting: "checkLoginState"});
}

function setLoginState(state) {
    let main = document.getElementById("main");
    let noLogin = document.getElementById("no-login");
    
    if(state) {
        main.classList.remove("no-view");
        noLogin.classList.add("no-view");
    } else {
        main.classList.add("no-view");
        noLogin.classList.remove("no-view");
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

function putSavedEmail() {
    chrome.runtime.sendMessage({greeting: "getEmail"}, (resp) => {
        emaitInput.value = resp.email;
    });
}

function msgUI(response) {
    if(document.getElementById("res")){
        $("#res").fadeIn(1);
        document.getElementById("res").innerHTML = response.farewell;
        setTimeout(() => {
            $("#res").fadeOut(800);
        }, 500);
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

function goToLogin() {
    chrome.tabs.create({
        url: 'https://dl.nure.ua/login/'
    });
}

document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("dropdown");
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                console.log("dropdown close");
            }
        }
    }
}

function onMessage(request, sender, sendResponse) {
    if (request.greeting == "setLoginState") {
        console.log(request.state);
        setLoginState(request.state);
    }
}