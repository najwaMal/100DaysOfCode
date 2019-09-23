document.write("Day 34: this and object Window <br/>");

document.write(this === window); // true because  object window is global object.

a = 37; 
document.write("<br>"+window.a); // 37

b = "it is mine"; 
document.write("<br>"+window.b);
document.write("<br>"+b);
document.write("<br/>"+this.b);
