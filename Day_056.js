document.write("Day 57: Array method 2 <br/>");

//Modified array
var fruits = ["Banana", "Orange", "Apple", "Mango"] ;
document.write(fruits.splice(1, 2, "Lemon", "Kiwi") + "<br/>");
document.write(fruits);

//Add element to the end of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
document.write(fruits);

//delete element to the end of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
document.write(fruits);

//Add an element to the beginning of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon", "Pineapple");
document.write(fruits);

//delete an element to the beginning of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
document.write(fruits);