document.write("Day 60 & 61: Week 9 challenge <be/>");

var first = [1, 2, 3, 5, 8, 13];
var second = [1, 2, 3, 4, 8, 13];

first.forEach(myFunction);
function myFunction(item, index) {
  if(first[item] != second[item]){
   document.write("The value is: " + second[item] + "<br/> The index is: " + index);
    }
    
}
