const moodleApi = "https://dl.nure.ua/";
const XDLApi = "https://xdl.leoit.dev/";

log("Background.js loading...");

importScripts('crypt.js');
chrome.runtime.onMessage.addListener(onMessage);
chrome.alarms.onAlarm.addListener(onAlarm);

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

        if(!localStorage["attendanceTimeout"]) {
            await setValue("attendanceTimeout", 5);
        }

        if(!localStorage["email"]) {
            await setValue("email", "");
        }
        
        console.log(localStorage);

        updateAttendanceId();
    
        stopAutoAttendanceThread();
        stopExtendOnlineThread();
        startAutoAttendanceThread();
        startExtendOnlineThread();
    
        if(localStorage["sExtendOnline"] == 'true' && localStorage["sAutoAttendance"] == 'true') {
            setOnlineFunctions();
        }
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

async function startAutoAttendanceThread() {
    const autoAttendance = await getValue("autoAttendance");
    const attendanceTimeout = await getValue("attendanceTimeout");
    if(autoAttendance == true) {
        log(`AutoAttendance thread started.`);
        updateAttendanceList();
        chrome.alarms.create("autoAttendanceThread", {delayInMinutes: 0.1, periodInMinutes: attendanceTimeout} );
    }
}

async function startExtendOnlineThread() {
    const extendOnline = await getValue("extendOnline");
    if(extendOnline == true) {
        log(`ExtendOnline thread started.`);
        chrome.alarms.create("extendOnlineThread", {delayInMinutes: 0.1, periodInMinutes: 5});
    }
}

function stopAutoAttendanceThread() {
    chrome.alarms.clear("autoAttendanceThread");
    log(`AutoAttendance thread stopped.`);
}

function stopExtendOnlineThread() {
    chrome.alarms.clear("extendOnlineThread");
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

async function setOnlineFunctions() {
    const localStorage = await getValue(null);
    const formData = new FormData();
    let h = "";

    for(key in localStorage) {
        if(key == 'length') break;
        formData.append(key, localStorage[key]);
        h += localStorage[key];
    }

    formData.append("h", crypt(h));

    const url = `${XDLApi}runner/`;
    const options = {
        method: 'POST',
        body: formData
    };
    const response = await fetch(url, options);
    if (!response.ok) {
        log(`Не удалось отправить запрос онлайн функций.`);
        chrome.runtime.sendMessage({greeting: "setLoading", farewell: "❌ Ошибка", animate: false});
        throw new Error('Fetch error: Failed to get AttendanceId.');
    }
    const data = await response.text();

    log(`Запрос онлайн функций на сервер отправлен. Ответ: ${data}`);
    chrome.runtime.sendMessage({greeting: "setLoading", farewell: "✔️ Сохранено", animate: false});
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

function setValue(name, value, isGlobal = false) {
    let values = {};
    if(!isGlobal) {
        values[name] = value;
    } else {
        values = value;
    }
    
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

async function onAlarm(alarm) {
    if(alarm.name == "autoAttendanceThread") {
        updateAttendanceList();
    }

    if(alarm.name == "extendOnlineThread") {
        extendLoginTimeout();
    }
}

function onMessage(request, sender, sendResponse) {
    if (request.greeting == "saveSettings") {
        let localStorage = {};
        getValue(null).then(lsBackup => {
            let isOffline = false;

            for (let key in request.settings) {
                localStorage[key] = request.settings[key];
            }
            setValue(null, localStorage, true);
    
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
                try {
                    chrome.tabs.query({active: true, currentWindow: true}, async (tabs) => {
                        const tabId = tabs[0].id;
                        const darkMode = await getValue("darkMode");
                        chrome.tabs.sendMessage(tabId, {greeting: "setDarkMode", dark: darkMode}, (resp) => {
                            const lastError = chrome.runtime.lastError;
                            if(lastError) {
                                log(lastError.message);
                                return;
                            }
                        });
                    });
                    isOffline = true;
                } catch (err) {
                    console.log(`Error while sending message on the tab: ${err}`);
                }
                return true;
            }
    
            if(!isOffline) {
                sendResponse({animate: true});
                setOnlineFunctions();
            }
    
            sendResponse({farewell: "✔️ Сохранено"});
        });

        return true;
    }

    if (request.greeting == "getSettings") {
        getValue(null).then(settings => {
            sendResponse({settings: settings})
        });
        return true;
    }

    if (request.greeting == "saveEmail") {
        setValue("email", request.email).then(() => {
            sendResponse({farewell: "OK"});
        });
        return true;
    }

    if (request.greeting == "saveAttendanceTimeout") {
        setValue("attendanceTimeout", request.timeout).then(() => {
            sendResponse({farewell: "OK"});
        });
        return true;
    }

    if (request.greeting == "saveAuth") {
        if(request.auth && request.auth.sesskey && request.auth.session) {
            getValue("sesskey").then(sesskey => {
                if(sesskey != request.auth.sesskey) {
                    setValue("sesskey", request.auth.sesskey);
                    log(`Received new session key: ${request.auth.sesskey}`);
                    Main();
                }
            });

            getValue("session").then(session => {
                if(session != request.auth.session) {
                    setValue("session", request.auth.session);
                    log(`Received new session: ${request.auth.session}`);
                }
            });

            sendResponse({farewell: "OK"});
        } else {
            sendResponse({farewell: "FAIL"});
        }
        return true;
    }

    if (request.greeting == "checkLoginState") {
        sendLoginState();
    }
    return true;
}

/* FUNCTIONS */