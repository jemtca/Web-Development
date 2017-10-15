//Exercise01
function rotateLeft3(array){
  
  var finalArray = new Array(3);
  
  finalArray[0] = array[1]; 
  finalArray[1] = array[2];
  finalArray[2] = array[0];
  
  return array.length == 3 ? finalArray : 
  "Array lenght is not 3."
  
}

//Exercise02
function reverse3(array){
  
  var finalArray = new Array(3);
  var newIndex = array.length - 1;
  
  for(i = 0; i < array.length; i++){
    finalArray[i] = array[newIndex];
    newIndex--;
  }
  
  return array.length == 3 ? finalArray : 
  "Array lenght is not 3."
  
}

//Exercise03

//Exercise04

//Exercise05

//Exercise06

//Exercise07

//Exercise08

//Exercise09

//Exercise10

//Exercise11

//Exercise12

//Exercise13

//Exercise14

//Exercise15
