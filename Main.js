var loc = document.location.pathname;
let debug = 1;

console.log(">XDL: Main.js loading...");

let apiLink = "https://dl.nure.ua/mod/attendance/";

updateAttendanceList()
setInterval(updateAttendanceList, 5 * 60 * 1000); // обновление каждые 5 минут

function updateAttendanceList(){
	$.ajax({
		url: apiLink + 'view.php',
		//url: `https://leoitdev.ru/api/XDL/test.php`,
		method: 'get',
		dataType: 'html',
		data: {
			id: 193690,
			mode: 2,
			view: 5
		},
		success: function(data){
			let word = "attendance.php?";
			let all = getAllIndexes(data, word);
			let link = "";
			if(all[0]){
				all.forEach(function callback(currentValue) {
					for(let i = currentValue; data[i] != `"`; i++){
						link += data[i];
					}
					console.log(link);
					setAttendance(link);
					link = "";
				});
			}else{
				console.log(">XDL: Нет доступных полей для отметки посещения.");
			}
		}
	});
}

function setAttendance(link){
	let fullLink = apiLink + link;
	$.ajax({
		url: fullLink,
		method: 'get',
		dataType: 'html',
		success: function(data){
			console.log(">XDL: Посещение отмечено.");
			sendStat(2, link);
			sendAttendanceMail("");
		}
	});
}

function sendAttendanceMail(mail){
	$.ajax({
		url: 'https://leoitdev.ru/api/XDL/mail/',
		method: 'post',
		dataType: 'html',
		data: {
			email: mail,
			subject: "DXL: Посещение отмечено",
			message: "Было отмечено посещение на DL Nure. \n\nЕсли вы не хотите получать рассылку, отключите её в настройках расширения.",
			submit: ""
		},
		success: function(data){
			sendStat(1, mail);
			console.log(`>XDL: Письмо о посещении отправлено на почту ${mail}.`);
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

// 1 - mail send
// 2 - attendance set
function sendStat(event, parameter){
	$.ajax({
		url: 'https://leoitdev.ru/api/XDL/stat/',
		method: 'post',
		dataType: 'html',
		data: {
			document: document,
			event: event,
			parameter: parameter
		},
		success: function(data){

		}
	})
}

chrome.runtime.sendMessage({greeting: "getSettings"},
    function (response) {
        console.log(response);
    }
);

console.log(">XDL: Main.js loaded.");