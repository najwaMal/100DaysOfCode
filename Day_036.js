document.write("Day 36: Deleting Properties <br/>");

var person = {
    firstName: "Najwa", 
    lastName: "Mal", 
    age: 25, 
    fullName : function() {
      return this.firstName + " " + this.lastName; 
    } 
  };
  document.write(person.firstName+"<br>"); 
  delete person.firstName; 
  document.write(person.firstName+"<br>");