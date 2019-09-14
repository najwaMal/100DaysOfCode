
var j=0, k=0;
for(var i=0; i<1; i++){
    document.write("label and use counting: ");
    inner1:while(j<4){
       j++;
      if(j==2){
        document.write("Ignore:"+ j);
        continue inner1;
        }
      
      document.write(" Iteration:" + j +" ");
    }

    
  
      document.write("<br/> label and use break: ");
   
    inner2:while(true){
      if(k==2){
        break inner2;
      }
      document.write(" Iteration: "+ k);
       k++;
    }
    document.write("<br>");
  }