document.write(" Day 15: Conditionals statement <br/>")

var now = new Date();
var dayOfWeek = now.getDay(); // Sunday - Saturday : 0 - 6

if(dayOfWeek == 5) {
    alert("Have a nice weekend!");
} else if(dayOfWeek == 0) {
    alert("Start a new week in 100 Days of code!");
} else {
    alert("Keep learn JS ^_^");
}