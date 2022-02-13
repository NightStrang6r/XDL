chrome.runtime.onMessage.addListener(onMessage);

function onMessage(request, sender, sendResponse) {
    if (request.greeting == "saveSettings"){
        for (let key in request.settings) {
            localStorage[key] = request.settings[key];
        }

        sendResponse({farewell: "Сохранено"});
    }

    if (request.greeting == "getSettings"){
        sendResponse({settings: localStorage});
    }

    if (request.greeting == "saveEmail"){
        localStorage["email"] = request.email;

        sendResponse({farewell: "OK"});
    }

    if (request.greeting == "getEmail"){
        sendResponse({email: localStorage["email"]});
    }
}