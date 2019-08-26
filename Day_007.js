document.write(" Day 7: Reserved Words" + '<br/');

function evenNumbers (){ //function is a reserved word
    for(var i = 0; i < 10; i++){//var and for are  reserved words
        if(i % 2 == 0){//if is a reserved word
            document.write( i + " is even Number" + '<br/>');
        }
        else{//else is a reserved word
            document.write(i +"Odd Number"+ '<br/>');
        }
      if(i==5){ //if is a reserved word
        break; //break is a reserved word
      }
    }
}

evenNumbers();