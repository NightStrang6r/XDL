const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";

log("Background.js loading...");

importScripts('crypt.js');
chrome.runtime.onMessage.addListener(onMessage);

/*let extendOnlineThread;
let autoAttendanceThread;

const attendanceTimeoutGl = await getValue("attendanceTimeout");
if(!attendanceTimeoutGl) {
    await setValue("attendanceTimeout", 5);
}

const emailGl = await getValue("email");
if(!emailGl) {
    await setValue("email", "");
}*/

Main();

log("Background.js loaded.");

async function Main(sesskey = false) {
    try {
        if(!sesskey) {
            sesskey = await obtainSesskey();
            await setValue("sesskey", sesskey);
        }
        
        const localStorage = await getValue(null);
        if(!localStorage || !localStorage["sesskey"] || localStorage["sesskey"] == 'undefined')
            return;
        
        console.log(localStorage);

        /*
        updateAttendanceId();
    
        stopAutoAttendanceThread();
        stopExtendOnlineThread();
        startAutoAttendanceThread();
        startExtendOnlineThread();
    
        if(localStorage["sExtendOnline"] == 'true' && localStorage["sAutoAttendance"] == 'true') {
            setOnlineFunctions();
        }*/
    } catch (err) {
        log(`Error in main: ${err}`);
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

async function obtainSesskey() {
    let sesskey;
    try {
        const options = {
            method: 'GET'
        };
        const response = await fetch(`${moodleApi}my/`, options);
        if (!response.ok) {
            throw new Error('Fetch error: Failed to get UserId.');
        }
        const data = await response.text();
        const link = "https://dl.nure.ua/login/logout.php?sesskey=";
        const linkPos = data.indexOf(link);

        if(linkPos != -1) {
            sesskey = "";
            for(let i = linkPos + link.length; i < data.length; i++) {
                if(data[i] == `"`) break;
                sesskey += data[i];
            }
        }

        if(sesskey && sesskey != undefined) {
            log(`Successfully obtained session key: ${sesskey}`);
        } else {
            log(`Failed to obtain sesskey: user need to log in DL.`);
        }
    } catch(err) {
        log(`Failed to obtain sesskey. Error: ${err}`);
    }
    return sesskey;
}

async function updateAttendanceId() {
    const userId = await getUserId();
    const courseId = await getFirstCourseId(userId);
    const attendanceId = await getAttendanceId(courseId);
    await setValue("attendanceId", attendanceId);
}

async function sendLoginState() {
    try {
        const sesskey = await obtainSesskey();

        let state = false;
        if(sesskey && sesskey != undefined) {
            state = true;
        } else {
            state = false;
        }
        chrome.runtime.sendMessage({greeting: "setLoginState", state: state});
    } catch(err) {
        log(`Failed to send login state: ${err}`);
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

async function getAttendanceId(courseId) {
    if(!courseId) return;
    let attendanceId;

    const url = `${moodleApi}/course/view.php?id=${courseId}`;
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Fetch error: Failed to get AttendanceId.');
    }
    const data = await response.text();
    const link = "https://dl.nure.ua/mod/attendance/view.php?id=";
    const linkPos = data.indexOf(link);

    if(linkPos != -1) {
        attendanceId = "";
        for(let i = linkPos + link.length; i < data.length; i++) {
            if(isNaN(Number(data[i]))) break;
            attendanceId += data[i];
        }
        attendanceId = Number(attendanceId);
    }

    if(attendanceId && attendanceId != undefined) {
        log(`AttendanceId: ${attendanceId} Link: ${moodleApi}mod/attendance/view.php?id=${attendanceId}&mode=2&view=5&sesscourses=all`);
    } else {
        log(`Failed to get AttendanceId.`);
    }

    return attendanceId;
}

async function getFirstCourseId(userId) {
    if(!userId) return;
    let courseId;

    const sesskey = await getValue("sesskey");
    const url = `${moodleApi}lib/ajax/service.php?sesskey=${sesskey}&info=core_course_get_recent_courses`;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: `[{"index":0,"methodname":"core_course_get_recent_courses","args":{"userid":${userId},"limit":1}}]`
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Fetch error: Failed to get FirstCourseId.');
    }
    const data = await response.json();

    let dat = data[0];
    if(dat && !dat.error) {
        courseId = dat.data[0].id;
    }

    log(`CourseId: ${courseId}`);
    return courseId;
}

async function getUserId() {
    let userId;
    try {
        const options = {
            method: 'GET'
        };
        const response = await fetch(`${moodleApi}my/`, options);
        if (!response.ok) {
            throw new Error('Fetch error: Failed to get UserId.');
        }
        const data = await response.text();
        const link = "https://dl.nure.ua/user/profile.php?id=";
        const linkPos = data.indexOf(link);

        userId = "";
        for(let i = linkPos + link.length; i < data.length; i++) {
            if(isNaN(Number(data[i]))) break;
            userId += data[i];
        }
        userId = Number(userId);

        if(userId && userId != undefined) {
            await setValue("userId", userId);
            log(`UserId: ${userId}`);
        } else {
            log(`Failed to get UserId. Is user logged in?`);
        }
    } catch(err) {
        log(`Failed to get UserId Error: ${err}`);
    }
    return userId;
}

async function extendLoginTimeout() {
    try {
        const sesskey = await getValue("sesskey");
        if(!sesskey) {
            log(`Failed to extendLoginTimeout: no sesskey provided`);
            return;
        }
    
        const url = `${moodleApi}lib/ajax/service.php?sesskey=${sesskey}&info=core_session_touch`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '[{"index":0,"methodname":"core_session_touch","args":{}}]'
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Fetch error: Failed to extendLoginTimeout.');
        }
        const data = await response.json();

        if(!data[0].error) {
            log(`Login timeout updated`);
        } else {
            log(`Failed to extendLoginTimeout: response error`);
        }
    } catch (err) {
        log(`Failed to extendLoginTimeout: ${err}`);
    }
}

async function updateAttendanceList() {
    const attendanceId = await getValue("attendanceId");
    if(!attendanceId) {
        log(`Invalid attendanceId: ${attendanceId}. Can't updateAttendanceList`);
        return;
    }

    const url = `${moodleApi}mod/attendance/view.php?id=${attendanceId}&mode=2&view=5&sesscourses=all`;
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Fetch error: Failed to updateAttendanceList.');
    }
    const data = await response.text();

    const word = "attendance.php?";
	const all = getAllIndexes(data, word);
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

async function setAttendance(link) {
    const url = `${moodleApi}mod/attendance/${link}`;
    const options = {
        method: 'GET'
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Fetch error: Failed to setAttendance.');
    }
    const data = await response.text();

    if(data.includes(`Сохранить`)) {
        const words = ["Присутствовал", "Присутній"];
        let status = "";

        words.forEach(word => {
            const index = data.indexOf(word);
            if(index == -1)
                return;

            for(let i = index; i < data.length; i--) {
                let sub = data.substring(i, index);
                console.log(sub)
                if(sub.includes("value")) {
                    i += 7;
                    for(let j = i; j < data.length; j++) {
                        if(isNaN(Number(data[j]))) 
                            break;
                        status += data[j];
                    }
                    status = Number(status);
                    break;
                }
            }
        });

        log(`setAttendance (adv) status ${status}`);

        if(status && status != 0) {
            let sessid, sesskey;
            sessid = getQueryVariable(link, "sessid");
            sesskey = getQueryVariable(link, "sesskey");

            const reqData = {
                data: {
                    sessid: sessid,
                    sesskey: sesskey,
                    _qf_mod_attendance_form_studentattendance: 1,
                    mform_isexpanded_id_session: 1,
                    status: status,
                    submitbutton: 'Сохранить'
                }
            }
            const aoptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(reqData)
            };
            const aresponse = await fetch(url, aoptions);
            if (!aresponse.ok) {
                throw new Error('Fetch error: Failed to setAttendance.');
            }
            const adata = await aresponse.text();

            sendAttendanceMail(url);
            log(`Посещение отмечено. (adv) Data: ${adata}`);
        }
    } else {
        sendAttendanceMail(url);
        log("Посещение отмечено.");
    }
}

async function sendAttendanceMail(link) {
    try {
        const localStorage = await getValue(null);
    
        if(localStorage["visitNotify"] != 'true')
            return;

        if(!localStorage["mail"] || localStorage["mail"] === undefined || !localStorage["session"]) {
            log(`Not enough data to send mail.`);
            return;
        }
    
        if(!localStorage["userId"]) {
            localStorage["userId"] = getUserId();
        }
    
        const url = `${XDLApi}mail/`;
        const body = new FormData();
        body.append('e', localStorage["mail"]);
        body.append('l', link);
        body.append('s', localStorage["session"]);
        body.append('u', localStorage["userId"]);
        body.append('h', genHash(localStorage["mail"], link, localStorage["session"], localStorage["userId"]));

        const options = {
            method: 'POST',
            body: body
        };
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Fetch error: Failed to sendAttendanceMail.');
        }
        const data = await response.text();
    
        log(`Запрос об отправке письма на почту ${localStorage["mail"]} отправлен. Ответ: ${data}`);
    } catch (err) {
        log(`Failed to sendAttendanceMail: ${err}`);
    }
}

function genHash() {
    let h = "";
    for(let i = 0; i < arguments.length; i++) {
        h += arguments[i];
    }
    return crypt(h);
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

function setValue(name, value) {
    let values = {};
    values[name] = value;
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set(values, function() {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }

            resolve(true);
        });
    });
}

function getValue(name) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(name, (items) => {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }

            if(name == null) {
                resolve(items);
            } else {
                resolve(items[name]);
            }
        });
    });
}

function clearStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.clear(function() {
            if (chrome.runtime.lastError) {
                return reject(chrome.runtime.lastError);
            }

            resolve(true);
        });
    });
}


async function onMessage(request, sender, sendResponse) {
    if (request.greeting == "saveSettings") {
        let localStorage = {};
        let lsBackup = await getValue(null);
        let isOffline = false;

        for (let key in request.settings) {
            await setValue(key, request.settings[key]);
            localStorage[key] = request.settings[key];
        }

        console.log(localStorage);
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
            //sendResponse({animate: true});
            //setOnlineFunctions();
        }

        sendResponse({farewell: "✔️ Сохранено"});
    }

    if (request.greeting == "getSettings") {
        const settings = await getValue(null);
        sendResponse({settings: settings});
        return true;
    }

    if (request.greeting == "saveEmail") {
        await setValue("email", request.email)
        sendResponse({farewell: "OK"});
        return true;
    }

    if (request.greeting == "saveAttendanceTimeout") {
        await setValue("attendanceTimeout", request.timeout)
        sendResponse({farewell: "OK"});
        return true;
    }

    if (request.greeting == "saveAuth") {
        if(request.auth && request.auth.sesskey && request.auth.session) {
            const sesskey = await getValue("sesskey");
            if(sesskey != request.auth.sesskey) {
                sesskey = request.auth.sesskey;
                log(`Received new session key: ${sesskey}`);
                Main();
            }

            const session = await getValue("session");
            if(session != request.auth.session) {
                session = request.auth.session;
                log(`Received new session: ${session}`);
            }

            sendResponse({farewell: "OK"});
            return true;
        } else {
            sendResponse({farewell: "FAIL"});
        }
    }

    if (request.greeting == "checkLoginState") {
        sendLoginState();
    }
}

/* FUNCTIONS */