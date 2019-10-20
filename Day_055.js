document.write("Day 55: Array Method 1 <br/>");

//Array as a string
var fruits = ["Banana", "Orange", "Apple", "Mango"] ;
document.write(fruits.join()) ;

//reverses the array's elements.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.reverse());

//Arrange (sort) the array's elements: Alphabetical order
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.sort());

//concatenating two arrays in one
var fruits1 = ["Banana", "Orange"];
var fruits2 = ["Apple", "Mango"];
document.write(fruits1.concat(fruits2));

//select a part from an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
document.write(fruits.slice(1, 3));
document.write(fruits.slice(2)+"<br/>");
document.write(fruits.slice(-2)+"<br/>");
document.write(fruits.slice(-3,-1)+"<br/>");
document.write(fruits.slice(1,-1)+"<br/>");

