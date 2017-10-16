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
function maxTriple(array){
  
  var result = 0;
  var firstOne = array[0];
  var middleOne = array[(array.length -1) /2]
  var lastOne = array[array.length - 1];
  
  if(firstOne > middleOne && firstOne > lastOne){
    result = firstOne;
  }
  else if(lastOne > middleOne && lastOne > firstOne){
    result = lastOne;     
  }
  else{
    result = middleOne;
  }
  
  return array.length % 2 != 0 ? result : "Even array."
  
}

//Exercise06
function swapEnds(array){
  
  var finalArray = new Array(array.length);
  var length = array.length;
  var firstOne = array[0];
  var lastOne = array[length - 1];
  
  if(length == 1){
     finalArray[0] = array[0];
   }
   else{
    finalArray[0] = lastOne;
    finalArray[length -1] = firstOne;
  
    for(i = 1; i < length -1; i++){
      finalArray[i] = array[i];
    }
  }
  
  return array.length >= 1 ? finalArray : 
  "The array length have to be at least 1."
  
}

//Exercise07
function unlucky1(array){
  
  var result = false;
  var length = array.length;
  var firstOne = array[0];
  var secondOne = array[1];
  var thirdOne = array[2];
  var last3 = array[length - 3];
  var last2 = array[length - 2];
  var last1 = array[length - 1];
  
  if(length == 2){
    if(firstOne == 1 && secondOne == 3){
      result = true;    
    }
  }
  else if (length == 3){
    if((firstOne == 1 && secondOne == 3) || 
    (secondOne == 1 && thirdOne == 3)){
      result = true;    
    }
  }
  else if(length == 4){
    if((firstOne == 1 && secondOne == 3) || 
    (secondOne == 1 && thirdOne == 3) || 
    (last2 == 1 && last1 == 3)){
      result = true;
    }
  }
  else{
    if((firstOne == 1 && secondOne == 3) || 
    (secondOne == 1 && thirdOne == 3) || 
    (last3 == 1 && last2 == 3) || 
    (last2 == 1 && last1 == 3)){
      result = true;
    }
   }
  
  return length >= 2 ? result : 
  "The array length will be at least 2.";
  
}

//Exercise08
function front11(array1,array2){
  
  var finalArray = new Array();
  
  if(array1.length == 0){
    finalArray[0] = array2[0];   
  }
  else if(array2.length == 0){
    finalArray[0] = array1[0];
   }
  else{
    finalArray[0] = array1[0];
    finalArray[1] = array2[0];
  }
  
  return array1.length > 0 || array2.length > 0 
  ? finalArray : "Empty arrays.";
  
}

//Exercise09
function isEverywhere(array,element){
  
  var result = true;
  var tempArray = new Array;
  var found = false;
  
  var newIndex = 0;
  
  for(i = 0; i < array.length/2; i++){
    if(array[newIndex] == element || 
       array[newIndex+1] == element){
      tempArray[i] = true;
      
    }
    else{
      tempArray[i] = false;
    }
    newIndex = newIndex + 2;
  }
  
  for(i = 0; i < tempArray.length && found == false; i++){
    if(tempArray[i] == false){
      found = true;
      result = false;
    }
  }
  
  return array.length == 0 || element == undefined ? 
    "Wrong parameter/s." : result;
  
}

//Exercise10

//Exercise11

//Exercise12

//Exercise13

//Exercise14

//Exercise15
