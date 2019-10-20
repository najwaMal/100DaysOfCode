document.write("Day 63: Function part2 <br/>");

//as a value
function myFunction(a, b) {
    return a * b;
    }
var x = myFunction(4, 3);

//function calling it self
(function s() {
    document.write("Hello! I called myself");
    })();

//constructor
var myFunction = new Function("a", "b", "return a * b");
document.write(myFunction(4, 3));

