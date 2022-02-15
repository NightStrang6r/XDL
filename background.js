const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://leoitdev.ru/api/XDL/";

const autoAttendanceTimeout = 5 * 60 * 1000; // 5 минут

log(">XDL: Background.js loading...");

let sesskey = obtainSesskey();

Main();

async function Main() {
    chrome.runtime.onMessage.addListener(onMessage);
    if(!sesskey)
        return;
    
    console.log(localStorage);

    if(localStorage["extendOnline"] === 'true') {
        log(`>XDL: ExtendOnline thread started.`);
        setInterval(extendLoginTimeout, autoAttendanceTimeout);
    }
    
    if(localStorage["autoAttendance"] === 'true') {
        log(`>XDL: AutoAttendance thread started.`);
        updateAttendanceList()
        setInterval(updateAttendanceList, autoAttendanceTimeout);
    }

    log(">XDL: Background.js loaded.");
}

function log(msg, err = false) {
    if(debug) {
        if(!err) {
            console.log(msg);
        } else {
            console.error(msg);
        }
    }
}

function testAjax() {
    $.ajax({
		url:`https://dl.nure.ua`,
		method: 'get',
		success: data => {
            console.log(data);
		}
	});
}

function obtainSesskey() {
    let sesskey = 0;
    try {
        $.ajax({
            url:`https://dl.nure.ua`,
            method: 'get',
            dataType: 'html',
            async: false,
            success: data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                let logoutLink = doc.getElementsByClassName("logininfo")[0].lastElementChild.href;
                sesskey = logoutLink.split('=')[1];
                log(`>XDL: Successfully obtained session key: ${sesskey}`);
            }
        });
    } catch(err) {
        log(`>XDL: Failed to obtain sesskey. Error: ${err}`, true);
    }
    return sesskey;
}

function extendLoginTimeout() {
    if(!sesskey) return;
    $.ajax({
		url:`${moodleApi}lib/ajax/service.php?sesskey=${sesskey}&info=core_session_touch`,
		method: 'post',
		dataType: 'json',
		data: '[{"index":0,"methodname":"core_session_touch","args":{}}]',
        contentType: "application/json",
		success: data => {
            log(`>XDL: Login timeout updated`);
		},
        error: err => {
            log(`>XDL: Failed to update login timeout`);
        }
	});
}

function updateAttendanceList() {
	$.ajax({
		url:`${moodleApi}mod/attendance/view.php`,
		//url: `https://leoitdev.ru/api/XDL/test.php`,
		method: 'get',
		dataType: 'html',
		data: {
			id: 193690,
			mode: 2,
			view: 5
		},
		success: data => {
			let word = "attendance.php?";
			let all = getAllIndexes(data, word);
			let link = "";
			if(all[0]){
				all.forEach(currentValue => {
					for(let i = currentValue; data[i] != `"`; i++){
						link += data[i];
					}
					log(link);
					setAttendance(link);
					link = "";
				});
			}else{
				log(">XDL: Нет доступных полей для отметки посещения.");
			}
		}
	});
}

function setAttendance(link) {
	let fullLink = `${moodleApi}mod/attendance/${link}`;

	$.ajax({
		url: fullLink,
		method: 'get',
		dataType: 'html',
		success: data => {
            if(data.includes(`Сохранить`)) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                let vars = doc.getElementsByClassName("statusdesc");
                let sessid, sesskey, status;

                for(let i = 0; i < vars.length; i++){
                    if(vars[i].innerHTML == "Присутствовал" || vars[i].innerHTML == "Присутній"){
                        status = vars[i].parentElement.firstElementChild.value
                    }
                }

                if(status) {
                    sessid = getQueryVariable(link, "sessid");
                    sesskey = getQueryVariable(link, "sesskey");

                    $.ajax({
                        url: fullLink,
                        method: 'post',
                        data: {
                            sessid: sessid,
                            sesskey: sesskey,
                            _qf_mod_attendance_form_studentattendance: 1,
                            mform_isexpanded_id_session: 1,
                            status: status,
                            submitbutton: 'Сохранить'
                        },
                        success: data => {
                            sendAttendanceMail(fullLink);
                            log(">XDL: Посещение отмечено. (adv)");
                        }
                    });
                }
            } else {
                sendAttendanceMail(fullLink);
                log(">XDL: Посещение отмечено.");
            }
		}
	});
}

function sendAttendanceMail(link) {
    let mail = localStorage["email"];
    if(!localStorage["visitNotify"] || !mail || mail === undefined)
        return;
	$.ajax({
		url: `${XDLApi}mail/`,
		method: 'post',
		dataType: 'html',
		data: {
			email: mail,
			subject: "DXL: Посещение отмечено",
			message: `Было отмечено посещение на DL Nure.\nСсылка: ${link}\n\nЕсли вы не хотите получать рассылку, отключите её в настройках расширения.`,
			submit: ""
		},
		success: data => {
			log(`>XDL: Письмо о посещении отправлено на почту ${mail}.`);
		}
	});
}

function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

function getQueryVariable(link, variable) {
    let query = link.replace("?", "&").substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    return null;
}


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