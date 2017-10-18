//Q1 - a
result = dogdeer

//Q1 - b

//Q1 - c

//Q3 - d

//Q4 - e

//Q2
function sumArray(array,number){
  
 var result = 0;
  
  sum = 0;
  
  
  for(var row = 0; row < number; row++){ 
    for(var col = 0; col < number; col++){
      sum = sum + array[row][col];
    }
  }
  
  return array.length > 0 && number > 0 ? sum : 
  "Wrong imput/s.";
  
}

//Q3
