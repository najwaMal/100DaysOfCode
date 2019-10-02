document.write("Day 39 and 40: challenge <br/>");

var teatcher = {
    Subject:"",
    CoordinatorName:"",
    NOofHours:0,
    NoofStudents:0,

    set subjectSet(value) {
        this.Subject = value; 
        },
    get subjectGet(){ 
        return this.Subject; 
        },


    set coordinattSet(value) {
            this.CoordinatorName = value; 
        },
    get coordinatGet(){ 
            return this.CoordinatorName; 
        },

    set NOofHoursSet(value) {
                this.NOofHours = value; 
        },
    get NOofHoursGet(){ 
                return this.NOofHours; 
        },

    set NoofStudentsSet(value) {
            this.NoofStudents = value; 
    },
    get NoofStudentsGet(){ 
            return this.NoofStudents; 
    },
 
   
};
//function to add new prof
 function profs (Subject, CoordinatorName, NOofHours,NoofStudents){
     this.Subject = Subject;
     this.CoordinatorName = CoordinatorName;
     this.NOofHours = NOofHours;
     this.NoofStudents=NoofStudents;
    }

//add prof using function
var najwa = new profs("Computer Skills","Sarah Ali",4,20);
document.write("* Hi from function:</br>Subject: "+najwa.Subject 
               +"<br/>CoordinatorName: "+ najwa.CoordinatorName 
               + "<br/> No of Hours: " + najwa.NOofHours
               + "<br/>No of Students:" + najwa.NoofStudents);


// add new prof using setter
teatcher.Subject = "Augmented Reality";
teatcher.CoordinatorName = "Alia Ahmed";
teatcher.NOofHours= 5;
teatcher.NoofStudents= 30;

//display prof data using getter
document.write("</br> __________________________</br>* Hi from Getter:"
              + "</br> Subject: "+teatcher.subjectGet
              + "</br> Coordinator Name: "+ teatcher.coordinatGet
              + "</br> NO of Hours: "+ teatcher.NOofHoursGet
              + "</br> No of Students: "+ teatcher.NoofStudentsGet);


