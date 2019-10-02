document.write("Day 41: The prototype Attribute </br>");

function Person1(){}
function Person2(){}
Person1.prototype = Object.create(Person2.prototype);
const Person3 = (new Person2);
document.write(Person1.prototype.isPrototypeOf(Person3)+"</br>");
//expected output: false
document.write(Person2.prototype.isPrototypeOf(Person3));
//expected output: true