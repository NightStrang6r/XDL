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
                $("#res").fadeIn(1);
                document.getElementById("res").innerHTML = response.farewell;
                setTimeout(() => {
                    $("#res").fadeOut(800);
                }, 500);
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

document.getElementById("menu").addEventListener("click", () => {
    document.getElementById("myDropdown").classList.toggle("show");
    console.log("dropdown");
});

// Close the dropdown if the user clicks outside of it
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