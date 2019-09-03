document.write(" Day 14: Variable Scope & Operators" + "<br/>");

var x=8, y=4, a=5, b="5", age=19, voteable;

// Operators:
document.write( x %= y);// it is same as x = x % y
document.write("<br/>");


// Comparison operators
// == compares the value
if (a == b){
    document.write(true +"<br/>"); 
}

// === compares the value & the type
if (a === b){
    document.write(true + "<br/>");
}
else if(a !== b){
    document.write("the type and the value are not the same <br/>");
}

// ternary operator  
voteable = (age < 18) ? "Too young":"Old enough"; 
document.write(voteable +"<br/>");

//Logic Operators
document.write( a > y && a < age);