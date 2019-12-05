document.write("Day 90: URL searchParams </br>");
var params = (new URL("https://example.com/?name=Najwa%20Khalil&age=25")).searchParams;
var name = params.get("name"); // is the string "Jonathan Smith".
var age = parseInt(params.get("age")); // is the number 18
document.write(name +"</br>");
document.write(age);