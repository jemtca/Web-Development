//Q1 - a
result = dogdeer

//Q1 - b
function concatenatingArrays(array1,array2){
  
  finalArray = "";
  
  for(var i = 0; i < array1.length; i++){
    finalArray = finalArray + "\"";
    finalArray = finalArray + array1[i];
    finalArray = finalArray + "\", ";
  }
  
  for(var i = 0; i < array2.length; i++){
    if(i < array2.length - 1){
      finalArray = finalArray + "\"";
      finalArray = finalArray + array2[i];
      finalArray = finalArray + "\", ";
    }
    else{
      finalArray = finalArray + "\"";
      finalArray = finalArray + array2[i];
      finalArray = finalArray + "\"" ;
    }
  }
  
  return array1.length > 0 || array2.length > 0 ? finalArray : 
  "Empty array/s.";
  
}

children = concatenatingArrays(boys,girls);

//Q1 - c
Yes, the loop will be executed without any error. (three times, when i is equal to 2, 3 and 4)

The array "arr" will contain five elements "[20,30,4,9,16]".

//Q3 - d
The value of sum when the loop terminates is 280.

//option 1
var arr = [10,20,30,40,50,60,70,80,90];
var sum = 0;

for(var i = 0; i < 8; i++){
  sum = sum + arr[i];
}

sum = sum + 10;

//option 2
var arr = [10,20,30,40,50,60,70,80,90];
var sum = 0;

for(var i = 0; i < 9; i++){
  if(i != 7){
    sum = sum + arr[i];
  }
}

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
