document.write(" Day 35: Inheritance <br/>");

function book(id, bookName, authorName){
     this.id = id;
     this.bookName = bookName; 
     this.authorName = authorName;
     }

var java = new book(101, "Java For Beginner", "John Smith"); 
var python = new book(102, "AI programming", "Alisson tony");

document.write(java.id+" ("+java.bookName+") "+java.authorName);