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

if(!localStorage["email"]) {
    localStorage["email"] = "";
}

Main();

log("Background.js loaded.");

async function Main() {
    if(!localStorage["sesskey"] || localStorage["sesskey"] == 'undefined')
        return;
    
    console.log(localStorage);

    updateAttendanceId();

    stopAutoAttendanceThread();
    stopExtendOnlineThread();
    startAutoAttendanceThread();
    startExtendOnlineThread();

    if(localStorage["sExtendOnline"] == 'true' && localStorage["sAutoAttendance"] == 'true') {
        setOnlineFunctions();
    }
}

/* FUNCTIONS */

function log(msg, err = false) {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if(day.toString().length == 1)
        day = `0${day}`;
    if(month.toString().length == 1)
        month = `0${month}`;
    if(hour.toString().length == 1)
        hour = `0${hour}`;
    if(minute.toString().length == 1)
        minute = `0${minute}`;
    if(second.toString().length == 1)
        second = `0${second}`;

    const logText = `>[${day}.${month}.${year}] [${hour}:${minute}:${second}] >XDL: ${msg}`;
    if(!err) {
        console.log(logText);
    } else {
        console.error(logText);
    }
    if(typeof msg == 'object')
        console.log(msg);
}

function startAutoAttendanceThread() {
    if(localStorage["autoAttendance"] === 'true') {
        log(`AutoAttendance thread started.`);
        updateAttendanceList();
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
                const doc = parseDOM(data);

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

function updateAttendanceId() {
    let userId = getUserId();
    let courseId = getFirstCourseId(userId);
    localStorage["attendanceId"] = getAttendanceId(courseId);
}

function sendLoginState() {
    try {
        $.ajax({
            url:`https://dl.nure.ua`,
            method: 'get',
            dataType: 'html',
            async: true,
            success: data => {
                const doc = parseDOM(data);

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
    let formData = new FormData();
    let h = "";
    for(key in localStorage) {
        if(key == 'length') break;
        formData.append(key, localStorage[key]);
        h += localStorage[key];
    }
    formData.append("h", $.md5(h));
    
    $.ajax({
		url:`${XDLApi}runner/`,
		method: 'post',
        data: formData,
        processData: false,
        contentType: false,
		success: data => {
            log(`Запрос онлайн функций на сервер отправлен. Ответ: ${data}`);
            chrome.runtime.sendMessage({greeting: "setLoading", farewell: "✔️ Сохранено", animate: false});
		},
        error: err => {
            log(`Не удалось отправить запрос онлайн функций.`);
            chrome.runtime.sendMessage({greeting: "setLoading", farewell: "❌ Ошибка", animate: false});
        }
	});
}

function getAttendanceId(courseId) {
    if(!courseId) return;
    let attendanceId;
    $.ajax({
		url:`${moodleApi}/course/view.php`,
		method: 'get',
		dataType: 'html',
        async: false,
		data: {
            id: courseId
        },
		success: data => {
            const doc = parseDOM(data);
            try {
                attendanceId = doc
                    .getElementsByClassName("attendance")[0]
                    .firstElementChild
                    .firstElementChild
                    .lastElementChild
                    .firstElementChild
                    .firstElementChild
                    .href.split("=")[1];
            } catch(err) {
                log(`Failed to get AttendanceId.`);
            }
		}
	});
    log(`AttendanceId: ${attendanceId} Link: ${moodleApi}mod/attendance/view.php?id=${attendanceId}&mode=2&view=5&sesscourses=all`);
    return attendanceId;
}

function getFirstCourseId(userId) {
    if(!userId) return;
    let courseId;
    $.ajax({
		url:`${moodleApi}lib/ajax/service.php?sesskey=${localStorage["sesskey"]}&info=core_course_get_recent_courses`,
		method: 'post',
		dataType: 'json',
        async: false,
		data: `[{"index":0,"methodname":"core_course_get_recent_courses","args":{"userid":${userId},"limit":1}}]`,
        contentType: "application/json",
		success: data => {
            data = data[0];
            if(data && !data.error) {
                courseId = data.data[0].id;
            }
		}
	});
    log(`CourseId: ${courseId}`);
    return courseId;
}

function getUserId() {
    let userId;
    try {
        $.ajax({
            url: moodleApi,
            method: 'get',
            dataType: 'html',
            async: false,
            success: data => {
                const doc = parseDOM(data);

                let userLink = doc.getElementsByClassName("logininfo")[0].firstElementChild.href;
                userId = userLink.split('=')[1];
                if(userId && userId != undefined) {
                    localStorage["userId"] = userId;
                    log(`UserId: ${userId}`);
                } else {
                    log(`Failed to get UserId.`);
                }
            }
        });
    } catch(err) {
        log(`Failed to get UserId Error: ${err}`);
    }
    return userId;
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
    if(!localStorage["attendanceId"]) {
        log(`Invalid attendanceId: ${localStorage["attendanceId"]}. Can't updateAttendanceList`);
        return;
    }

	$.ajax({
		url:`${moodleApi}mod/attendance/view.php`,
		method: 'get',
		dataType: 'html',
		data: {
			id: localStorage["attendanceId"],
			mode: 2,
			view: 5,
            sesscourses: "all"
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
                const doc = parseDOM(data);

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

    if(localStorage["visitNotify"] != 'true' || !mail || mail === undefined)
        return;

    if(!localStorage["userId"]) {
        localStorage["userId"] = getUserId();
    }

	$.ajax({
		url: `${XDLApi}mail/`,
		method: 'post',
		dataType: 'html',
		data: {
			e: mail,
			l: link,
            s: localStorage["session"],
            u: localStorage["userId"],
            h: genHash(mail, link, localStorage["session"], localStorage["userId"])
		},
		success: data => {
			log(`Запрос об отправке письма на почту ${mail} отправлен. Ответ: ${data}`);
		}
	});
}

function genHash() {
    let h = "";
    for(let i = 0; i < arguments.length; i++) {
        h += arguments[i];
    }
    return $.md5(h);
}

function parseDOM(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, 'text/html');
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
        let isOffline = false;
        Object.assign(lsBackup, localStorage);
        for (let key in request.settings) {
            localStorage[key] = request.settings[key];
        }

        if(lsBackup["autoAttendance"] != localStorage["autoAttendance"]) {
            stopAutoAttendanceThread();
            startAutoAttendanceThread();
            isOffline = true;
        }

        if(lsBackup["extendOnline"] != localStorage["extendOnline"]) {
            stopExtendOnlineThread();
            startExtendOnlineThread();
            isOffline = true;
        }

        if(lsBackup["darkMode"] != localStorage["darkMode"]) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                const tabId = tabs[0].id;
                chrome.tabs.sendMessage(tabId, {greeting: "setDarkMode", dark: localStorage["darkMode"]});
            });
            isOffline = true;
        }

        if(!isOffline) {
            sendResponse({animate: true});
            setOnlineFunctions();
        }

        sendResponse({farewell: "✔️ Сохранено"});
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
                Main();
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

/* FUNCTIONS */