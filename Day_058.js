document.write("Day 58: Array methods 4 <br/>");

//Perform operations on array elements
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt);
document.write(x);

//select values from the array
a = [5, 4, 3, 2, 1];
smallvalues = a.filter(function(x) { return x < 3 });
everyother = a.filter(function(x,i) { return i%2==0 });
document.write(smallvalues);
document.write("<br>");
document.write(everyother);

//Check items with a certain condition
a = [1,2,3,4,5];
y= a.every(function(x) { return x < 10; })
z= a.every(function(x) { return x % 2 === 0; })
document.write(y);
document.write("<br>");
document.write(z);
document.write("<br>");

y= a.some(function(x) { return x < 10; })
z= a.some(function(x) { return x % 2 === 0; })
document.write(y);
document.write("<br>");
document.write(z);


var numbers = [175, 50, 25];
var leftToRight = numbers.reduce(function(total, num) {return total - num;});
var RighToLeft = numbers.reduceRight(function(total, num) {return total - num;});
document.write(leftToRight);
document.write("<br>");
document.write(RighToLeft);

//search in array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
var b = fruits.lastIndexOf("Mango");
document.write(a);
document.write("<br>");
document.write(b);

