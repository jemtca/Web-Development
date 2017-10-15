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
function has23(array){
  
  var result = false;
  
  for(i = 0; i < array.length; i++){
    if(array[i] == 2 || array[i] == 3){
      result = true;
    }
  }
  
  return array.length == 2 ? result : 
  "Array lenght is not 2."
  
}

//Exercise04
function fix23(array){
  
  var finalArray = new Array(3);
  var tempIndex = 1;
  
  finalArray[0] = array[0];
  
  for(i = 0; i < array.length; i++){
    if(i < 2){
      if(array[i] == 2 && array[i+1] == 3){
        finalArray[tempIndex] = 0; 
      }
      else{
        finalArray[tempIndex] = array[tempIndex];
      }
      tempIndex++;
    }
  }
  
  return array.length == 3 ? finalArray : 
  "Array lenght is not 3."
  
}

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
