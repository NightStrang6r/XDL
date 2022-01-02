{

let area = document.getElementsByClassName("modal-content")[0];
let checkboxes = document.getElementsByClassName("custom-checkbox");
let settings = new Object;
if(area && checkboxes){
    restoreSettings();
    area.addEventListener("click", saveSettings);
}

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

function saveSettings(){
    for(let i = 0; i < checkboxes.length; i++){
        settings[checkboxes[i].name] = checkboxes[i].checked;
    }

    chrome.runtime.sendMessage({greeting: "saveSettings", settings: settings},
        function (response) {
            if(document.getElementById("res")){
                document.getElementById("res").innerHTML = response.farewell;
            }
        }
    );
}

function getArrString(arr){
    let str = "";
    for (var key in arr) {
        str += "Ключ: " + key + " значение: " + arr[key] + "\n";
    }
    return str;
}


}