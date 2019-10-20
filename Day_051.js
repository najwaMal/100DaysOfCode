document.write("Day 51: Iterating Arrays <br/>");

//Print an array elements using for loop
var txt = "";
 var fruits = ["Apple", "pineapple", "strawberry"];
 for(var i = 0; i < fruits.length; i++) { 
     txt = txt + fruits[i] + " ";
    }
document.write(txt + "<br/>");

//print an array elements using for each loop
var all = ""; 
var fruits = ["Apple", "pineapple", "strawberry"];
fruits.forEach(myFunction);
function myFunction(value) {
  all = all + value + " "; 
}

document.write(all);