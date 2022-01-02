chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	    if (request.greeting == "saveSettings"){
            for (let key in request.settings) {
                localStorage[key] = request.settings[key];
            }

            sendResponse({farewell: "Сохранено"});
        }

        if (request.greeting == "getSettings"){
            sendResponse({farewell: "Bye", settings: localStorage});
        }
	}
);