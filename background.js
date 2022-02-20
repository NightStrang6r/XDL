const debug = true;

const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";

log("Background.js loading...");

chrome.runtime.onMessage.addListener(onMessage);

localStorage["sesskey"] = obtainSesskey();
let extendOnlineThread;
let autoAttendanceThread;

if(!localStorage["attendanceTimeout"]) {
    localStorage["attendanceTimeout"] = 5;
}

Main();

log("Background.js loaded.");

async function Main() {
    if(!localStorage["sesskey"])
        return;
    
    console.log(localStorage);

    startAutoAttendanceThread();
    startExtendOnlineThread();
}

function log(msg, err = false) {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getMinutes();

    const logText = `>[${day}.${month}.${year}] [${hour}:${minute}:${second}] >XDL: ${msg}`;
    if(!err) {
        console.log(logText);
    } else {
        console.error(logText);
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
        log(`AutoAttendance thread started.`);
        updateAttendanceList()
        autoAttendanceThread = setInterval(updateAttendanceList, localStorage["attendanceTimeout"] * 60 * 1000);
    }
}

function startExtendOnlineThread() {
    if(localStorage["extendOnline"] === 'true') {
        log(`ExtendOnline thread started.`);
        extendOnlineThread = setInterval(extendLoginTimeout, 5 * 60 * 1000);
    }
}

function stopAutoAttendanceThread() {
    clearInterval(autoAttendanceThread);
    log(`AutoAttendance thread stopped.`);
}

function stopExtendOnlineThread() {
    clearInterval(extendOnlineThread);
    log(`ExtendOnline thread stopped.`);
}

function obtainSesskey() {
    let sesskey;
    try {
        $.ajax({
            url: moodleApi,
            method: 'get',
            dataType: 'html',
            async: false,
            success: data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                let logoutLink = doc.getElementsByClassName("logininfo")[0].lastElementChild.href;
                sesskey = logoutLink.split('=')[1];
                if(sesskey && sesskey != undefined) {
                    log(`Successfully obtained session key: ${sesskey}`);
                } else {
                    log(`Failed to obtain sesskey: user need to log in DL.`);
                }
            }
        });
    } catch(err) {
        log(`Failed to obtain sesskey. Error: ${err}`);
    }
    return sesskey;
}

function sendLoginState() {
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

function setOnlineFunctions() {
    $.ajax({
		url:`${XDLApi}setFunctions/`,
		method: 'post',
		dataType: 'json',
		data: {
            settings: localStorage
        },
        contentType: "application/json",
		success: data => {
            
		},
        error: err => {
            
        }
	});
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
            log(`Login timeout updated`);
		},
        error: err => {
            log(`Failed to update login timeout`);
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
				log("Нет доступных полей для отметки посещения.");
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
                            log("Посещение отмечено. (adv)");
                        }
                    });
                }
            } else {
                sendAttendanceMail(fullLink);
                log("Посещение отмечено.");
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
			log(`Запрос об отправке письма на почту ${mail} отправлен. Ответ: ${data}`);
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
        }

        if(lsBackup["autoAttendance"] != localStorage["autoAttendance"]) {
            stopAutoAttendanceThread();
            startAutoAttendanceThread();
        }

        if(lsBackup["extendOnline"] != localStorage["extendOnline"]) {
            stopExtendOnlineThread();
            startExtendOnlineThread();
        }

        if(lsBackup["sAutoAttendance"] != localStorage["sAutoAttendance"]
        || lsBackup["sExtendOnline"] != localStorage["sExtendOnline"]) {
            setOnlineFunctions();
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

    if (request.greeting == "saveAttendanceTimeout") {
        localStorage["attendanceTimeout"] = request.timeout;

        sendResponse({farewell: "OK"});
    }

    if (request.greeting == "saveAuth") {
        if(request.auth && request.auth.sesskey && request.auth.session) {
            if(localStorage["sesskey"] != request.auth.sesskey) {
                localStorage["sesskey"] = request.auth.sesskey;
                log(`Received new session key: ${localStorage["sesskey"]}`);
            }

            if(localStorage["session"] != request.auth.session) {
                localStorage["session"] = request.auth.session;
                log(`Received new session: ${localStorage["session"]}`);
            }

            sendResponse({farewell: "OK"});
        } else {
            sendResponse({farewell: "FAIL"});
        }
    }

    if (request.greeting == "checkLoginState") {
        sendLoginState();
    }
}