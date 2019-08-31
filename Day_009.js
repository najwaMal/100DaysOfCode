document.write("Day 9: Types & Numbers" + '<br/>');

//Primitive types examples
var string = "Hello";
var boolean = true;
var noValu = null;
//Integer and Floating Numbers are the same in JS
var intNum = 5;
var floatNum = 1.5;

//Object types example
var array = [1,-2,3];

//Mathematical operations example
document.write(Math.pow(intNum,array[0]));

//Divide by zero
document.write(floatNum / 0);// result = infinyty
document.write(-floatNum/ 0);// result = -infinity
document.write(0 / 0); // result = NaN
document.write((Math.sqrt( array[1] )) + '' + Math.sqrt('k'));//The root of negative numbers and characters is NaN

