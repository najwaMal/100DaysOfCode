document.write(" Day 13: String" + '<br/>');

//to print the string insid "" or ''
document.write("My name is:'Najwa'" + '<br/>');
document.write('My name is:"Najwa"'+ '<br/>');
//but it is good practies to use / befor '' or ""
document.write("My name is:\'Najwa\'" + '<br/>');
document.write('My name is:\"Najwa\"'+ '<br/>');

//using '' and "" with JS and HTML in same code, all below is true
//<button onclick="alert('Thank you')">Click Me</button>
//<button onclick='alert("Thank you")'>Click Me</button>

//string methods
var x = "Najwa";
document.write(x.length); //Number of characters in a string
document.write(x.indexOf("j")); //print the index of first j in the string
document.write(x.toUpperCase());//convert the string to an uppercase letter



