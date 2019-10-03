document.write("Day 46 and 47: Arrays Challenge </br>");

var graduates = ["Najwa", "Sarah", "Klthom", "Bushrah", "Hend"];
var GPA = [4.66, 4.70, 5.00, 3.55, 2.88];

document.write("Graduates GPAs: </br>");

for(var i=0; i<=4; i++){
    document.write(i+1 + "- " + graduates[i] + " GPA= " + GPA[i] + "</br>");
}