document.write(" Day 31 & 32: week 5 challenge <br/>");

var x = prompt("Inter first number:","");
var y = prompt("Inter second number:","");
try{
  if(y==0) throw "division by zero exception";
  else {
      alert("Result = "+  x/y);
  }
}
catch(err){
  alert(err);
}
finally {
  alert("finally");
}