const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";
const autoAttendanceTimeout = 5 * 60 * 1000; // 5 минут

log(">XDL: Background.js loading...");

chrome.runtime.onMessage.addListener(onMessage);

localStorage["sesskey"] = obtainSesskey();
let extendOnlineThread;
let autoAttendanceThread;

Main();

log(">XDL: Background.js loaded.");

async function Main() {
    if(!localStorage["sesskey"])
        return;
    
    console.log(localStorage);

    startAutoAttendanceThread();
    startExtendOnlineThread();
}

function log(msg, err = false) {
    if(!err) {
        console.log(msg);
    } else {
        console.error(msg);
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

function startAutoAttendanceThread() {
    if(localStorage["autoAttendance"] === 'true') {
        log(`>XDL: AutoAttendance thread started.`);
        updateAttendanceList()
        autoAttendanceThread = setInterval(updateAttendanceList, autoAttendanceTimeout);
    }
}

function startExtendOnlineThread() {
    if(localStorage["extendOnline"] === 'true') {
        log(`>XDL: ExtendOnline thread started.`);
        extendOnlineThread = setInterval(extendLoginTimeout, autoAttendanceTimeout);
    }
}

function stopAutoAttendanceThread() {
    clearInterval(autoAttendanceThread);
    log(`>XDL: AutoAttendance thread stopped.`);
}

function stopExtendOnlineThread() {
    clearInterval(extendOnlineThread);
    log(`>XDL: ExtendOnline thread stopped.`);
}

function obtainSesskey() {
    let sesskey;
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
                if(sesskey && sesskey != undefined) {
                    log(`>XDL: Successfully obtained session key: ${sesskey}`);
                } else {
                    log(`>XDL: Failed to obtain sesskey: user need to log in DL.`);
                }
            }
        });
    } catch(err) {
        log(`>XDL: Failed to obtain sesskey. Error: ${err}`);
    }
    return sesskey;
}

function checkLoginState() {
    try {
        $.ajax({
            url:`https://dl.nure.ua`,
            method: 'get',
            dataType: 'html',
            async: true,
            success: data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                let logoutLink = doc.getElementsByClassName("logininfo")[0].lastElementChild.href;
                sesskey = logoutLink.split('=')[1];
                let state = false;
                if(sesskey && sesskey != undefined) {
                    state = true;
                } else {
                    state = false;
                }
                chrome.runtime.sendMessage({greeting: "setLoginState", state: state});
            }
        });
    } catch(err) {
        return false;
    }
}

function extendLoginTimeout() {
    if(!localStorage["sesskey"]) return;
    $.ajax({
		url:`${moodleApi}lib/ajax/service.php?sesskey=${localStorage["sesskey"]}&info=core_session_touch`,
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
			link: link
		},
		success: data => {
			log(`>XDL: Запрос об отправке письма на почту ${mail} отправлен. Ответ: ${data}`);
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
    if (request.greeting == "saveSettings") {
        let lsBackup = {};
        Object.assign(lsBackup, localStorage);
        for (let key in request.settings) {
            localStorage[key] = request.settings[key];

            if(key == `autoAttendance` && lsBackup[key] != localStorage[key]) {
                stopAutoAttendanceThread();
                startAutoAttendanceThread();
            }
            if(key == `extendOnline` && lsBackup[key] != localStorage[key]) {
                stopExtendOnlineThread();
                startExtendOnlineThread();
            }
        }

        sendResponse({farewell: "Сохранено"});
    }

    if (request.greeting == "getSettings") {
        sendResponse({settings: localStorage});
    }

    if (request.greeting == "saveEmail") {
        localStorage["email"] = request.email;

        sendResponse({farewell: "OK"});
    }

    if (request.greeting == "getEmail") {
        sendResponse({email: localStorage["email"]});
    }

    if (request.greeting == "saveSesskey") {
        if(request.sesskey) {
            if(localStorage["sesskey"] != request.sesskey) {
                localStorage["sesskey"] = request.sesskey;
                log(`>XDL: Received new session key: ${localStorage["sesskey"]}`);
            }
            sendResponse({farewell: "OK"});
        } else {
            sendResponse({farewell: "FAIL"});
        }
    }

    if (request.greeting == "checkLoginState") {
        checkLoginState();
    }
}