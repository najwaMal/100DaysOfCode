document.write("Day 52: Multidimensional Array <br/>");

//First method
var activities = [ 
    ['Working', 7], 
    ['Eating', 6], 
    ['Walking', 4], 
    ['Playing Game', 8], 
    ['Sleeping', 9] 
  ];
  
  document.write(activities);

  //another method
  var compute = new Array(5); 
  for(var i = 0; i < compute.length; i++)
  compute [i] = new Array(3); 
 
  for(var row = 0; row < compute.length; row++) { 
  for(col = 0; col < compute [row].length; col++) {
    compute [row][col] = row*col; 
  } 
}  
document.write(compute [4][2]);

