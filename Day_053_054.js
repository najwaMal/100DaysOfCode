document.write("Day 53 & 54: week 8 challenge <br/>");

var employees =[["Employee","Job role","Experience"]];

//function to add new employee
function addEmp(info){
employees[employees.length]= info;
}

//Add employees
addEmp(arr=["Ahmed","Programmer",6]);
addEmp(arr=["Saad","Engineer",3]);
addEmp(arr=["Omar","Accountant",1]);
addEmp(arr=["Mohammed","CEO",5]);
addEmp(arr=["Rami","Programmer",2]);
addEmp(arr=["Salem","Analyst",8]);

//function to disply employees with more than 3 years of experience 
function empExp(){
  document.write(employees[0]+"<br/>");
  for(var i=0; i<employees.length; i++){
  if(employees[i][2]>3){
    document.write(employees[i] + "<br/>");
  }
 }
}

//Disply employees with more than 3 years of experience 
empExp();

//function to delete employee by his index in the array
function deleteEmp(index){
  delete employees [index];
}

//delete employee saad with index 2
deleteEmp(2);



