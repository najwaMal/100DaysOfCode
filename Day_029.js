document.write("Day 29: try/catch/finally <br>");



var x = prompt("Inter a number between 5 and 10","");
try{
  if(x=="") throw "Empty";
  if (isNaN(x)) throw "Not a number";
  x = Number(x);
  if(x < 5) throw "Too small";
  if(x > 10) throw "Too big";
}
catch(err){
  alert(err);
}
finally {
  alert("finally");
}