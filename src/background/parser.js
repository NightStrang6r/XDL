class Parser {
    constructor() {
        this.logger = new Logger();
        this.storage = new Storage();
    }

    async getAttendanceId(courseId) {
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
            this.logger.log(`AttendanceId: ${attendanceId} Link: ${moodleApi}mod/attendance/view.php?id=${attendanceId}&mode=2&view=5&sesscourses=all`);
        } else {
            this.logger.log(`Failed to get AttendanceId.`);
        }
    
        return attendanceId;
    }
    
    async getFirstCourseId(userId) {
        if(!userId) return;
        let courseId;
    
        const sesskey = await this.storage.getValue("sesskey");
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
    
        this.logger.log(`CourseId: ${courseId}`);
        return courseId;
    }
    
    async getUserId() {
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
                await this.storage.setValue("userId", userId);
                this.logger.log(`UserId: ${userId}`);
            } else {
                this.logger.log(`Failed to get UserId. Is user logged in?`);
            }
        } catch(err) {
            this.logger.log(`Failed to get UserId Error: ${err}`);
        }
        return userId;
    }

    async updateAttendanceId() {
        const userId = await this.getUserId();
        const courseId = await this.getFirstCourseId(userId);
        const attendanceId = await this.getAttendanceId(courseId);
        await this.storage.setValue("attendanceId", attendanceId);
    }
}