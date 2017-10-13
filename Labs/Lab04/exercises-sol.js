//Exercise01
function Abba(string1,string2){
  
  return string1 + string2 + string2 + string1;
 
}

//Exercise02
function endsLy(string){
  
  return string.toLowerCase().endsWith("ly") ? true : false;
  
}

//Exercise03
function firstHalf(string){
  
  var result = "";
  
  for(i = 0; i < string.length/2; i++){
    result = result + string[i];
  }
  
  return result;

}

//Exercise04
function right2(string){
  
  var lastTwoChars = string.slice(-2); // end -> start, 2 positions
  
  if(string.length < 2){
     return "The string is too short.";
  }
  else if(string.length == 2){
    return string[1] + string[0];
  }
  else{
    // finalString = lastTwoChars + string.substring(0,string.length - 2);
    // finalString = lastTwoChars + string.substr(0,string.length - 2);
    // finalString = lastTwoChars + string.slice(0,string.length - 2);
    return lastTwoChars + string.slice(0,string.length - 2);
  }
  
}

//Exercise05
function conCat(string1,string2){
  
  var finalString = "";
  
  if(string1.slice(-1) == string2.charAt(0)){
    finalString = string1 + string2.slice(1);
     }
  else{
    finalString = string1.concat(string2);
  }
  
  return finalString;
  
}

//Exercise06
function frontAgain(string){
  
  var result = false;
  var temp = string.charAt(0) + string.charAt(1);
  
  if(temp.toLowerCase() == string.slice(-2).toLowerCase()){
     result = true;
   }
  
  return result;
     
}

//Exercise07

//Exercise08

//Exercise09

//Exercise10
