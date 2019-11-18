document.write("Day 66: JavaScript Closures </br>");
var counter = 0;//global
function add() {
counter += 1;
}
add();
add();
add();
document.write(counter);//result is 3

var counter = 0;//global
function add() {
var counter = 0;//local
counter += 1;//used local variable 
}
add();
add();
add();
document.write(counter);//result is zero


var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
    })();
    add();
    add();
    add();
    document.write(add());//result is 4