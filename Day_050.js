document.write("Day 50: Deleting Array Elements </br>");

var numbers = [1,2,3];
document.write("Original Array:" + numbers + ", length = "+ numbers.length +"</br>");
delete numbers [1];
document.write("The array after delete element #1: "+ numbers + ", length = "+ numbers.length +"</br>");

var names = ['Omar', 'Talal', 'Ahmed', 'Saad', 'Fahad']; 
document.write("Original array: "+ names + ", length= "+ names.length + "</br>");

names.length = 3; //to delete last two elements 
document.write("Original array: "+ names + ", length= "+ names.length + "</br>");

names.length = 0; // to delete all elements of the array.
document.write("Original array: "+ names + ", length= "+ names.length + "</br>");
