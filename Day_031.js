document.write(" Day 31: Object with methods <br/>");

var person = { 
    firstName: "Najwa", 
    lastName: "Mal", 
    age: 25, 
    fullName : function() { 
      return this.firstName + " " + this.lastName; 
    } 
  };
  document.write(person.fullName());