class Attendance {
    constructor() {
        this.logger = new Logger();
        this.storage = new Storage();
        this.helper = new Helper();
        this.online = new Online();
    }

    async updateAttendanceList() {
        const attendanceId = await this.storage.getValue("attendanceId");
        if(!attendanceId) {
            this.logger.log(`Invalid attendanceId: ${attendanceId}. Can't updateAttendanceList`);
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
        const all = this.helper.getAllIndexes(data, word);
        let link = "";
        if(all[0]){
            all.forEach(currentValue => {
                for(let i = currentValue; data[i] != `"`; i++){
                    link += data[i];
                }
                this.logger.log(link);
                this.setAttendance(link);
                link = "";
            });
        }else{
            this.logger.log("Нет доступных полей для отметки посещения.");
        }
    }

    async setAttendance(link) {
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
    
            this.logger.log(`setAttendance (adv) status ${status}`);
    
            if(status && status != 0) {
                let sessid, sesskey;
                sessid = this.helper.getQueryVariable(link, "sessid");
                sesskey = this.helper.getQueryVariable(link, "sesskey");
    
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
    
                this.online.sendAttendanceMail(url);
                this.logger.log(`Посещение отмечено. (adv) Data: ${adata}`);
            }
        } else {
            this.online.sendAttendanceMail(url);
            this.logger.log("Посещение отмечено.");
        }
    }
}