document.write("Day 38: Testing Properties <br/>");

var person = { 
    firstName: "Najwa", 
    lastName: "Mal", 
    age: 25,
    work: "programmer"
  };
  
    Object.defineProperty(person,"work",{
    enumerable:false,
  });
  
  for(var i in person){
     document.write( " <br/>"+i + "="+ person[i]);
   }
  
 
  document.write("<br/>" + person.hasOwnProperty("lastName"));
  document.write("firstName" in person);
  document.write("<br/>"+"<br/>"+person.propertyIsEnumerable("work"));
