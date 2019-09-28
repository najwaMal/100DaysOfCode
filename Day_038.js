document.write("Day 38: Getters and Setters <br/>");

var person = {
    firstName: "Najwa", 
    lastName: "Mal", 
    language: "AR", 
    
    set langSet(value) {
  this.language = value; 
  },
    get langGet(){ 
  return this.language; 
    }
  
  }; 
  langSet = "Turkish language"; 
  document.write(person. langGet);