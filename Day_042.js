document.write("Day 42: Adding Properties to Property </br>");


function Person(first, last, expYears, field) { 
    this.firstName = first; 
    this.lastName = last; 
    this.expYears = expYears; 
    this.field = field; 
  }
  Person.prototype.nationality = "Spanish";
  var myFather = new Person("Alvaro", "Morte", 20, "actor"); 
  document.write("The nationality of my favorite actor is " + myFather.nationality);