const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://leoitdev.ru/api/XDL/";

log(">XDL: Main.js loading...");

let settings;

Main();

async function Main() {
    settings = await getSettings();

    log(`>XDL: Settings loaded:`);
    log(settings);

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

function getSettings() {
    let settings = new Promise (resolve => {
        chrome.runtime.sendMessage({greeting: "getSettings"}, 
        resp => resolve(resp.settings));
    });
    
    return settings;
}

// 1 - mail send
// 2 - attendance set
function sendStat(event, parameter) {
	/*$.ajax({
		url: `${XDLApi}stat/`,
		method: 'post',
		dataType: 'html',
		data: {
			document: document,
			event: event,
			parameter: parameter
		},
		success: function(data){

		}
	})*/
}

/* FUNCTIONS */