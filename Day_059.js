document.write("Day 59: Strings As Arrays <br/>");

//index of specific character
var str = "HELLO WORLD";
var res = str.charAt(0); 
var resEnd = str.charAt(str.length-1);
document.write(res);
document.write("<br>");
document.write(resEnd);

//Check for a specific word
var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
document.write(n);

//Comparison
var str1 = "ab";
var str2 = "ab";
var str3 = "ba";
var str4 = "cd";
var n = str1.localeCompare(str2);
document.write(n + "<br/>");
var a = str3.localeCompare(str1);
document.write(a + "<br/>");
var b = str1.localeCompare(str4);
document.write(b + "<br/>");

//search in string by word and return their index
var fullName = "Najwa Khlil Mal";
document.write(fullName.search("Mal") + "<br/>");
document.write(fullName.search("mal"));

//search in string by word and return true or false
var fullName = "Najwa Khlil Mal";
document.write(fullName.includes("Mal") + "<br/>");
document.write(fullName.includes("mal"));

//Convert letters to Upper or lower case
var fullName = "Najwa Khlil Mal";
document.write(fullName.toUpperCase() + "<br/>");
document.write(fullName.toLowerCase());
