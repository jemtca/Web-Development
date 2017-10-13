//Exercise01
function Abba(string1,string2){
  
  return string1.length == 0 || (string2.length == 0) ?
  "Empty string/s." : string1 + string2 + string2 + string1;
 
}

//Exercise02
function endsLy(string){
  
  var result = false;
  
  if(string.toLowerCase().endsWith("ly")){
    result = true;
  }
  
  return string != 0 ? result : "Empty string.";
  
}

//Exercise03
function firstHalf(string){
  
  var result = "";
  
  for(i = 0; i < string.length/2; i++){
    result = result + string[i];
  }
  
  return string.length % 2 == 0 ?
  result : "You have introduced a string that is not even.";
  
}

//Exercise04
function right2(string){
  
  var finalString = "";
  var lastTwoChars = string.slice(-2); // end -> start, 2 positions
  
  if(string.length < 2){
     finalString = "The string is too short.";
  }
  else if(string.length == 2){
    finalString = string[1] + string[0];
  }
  else{
    // finalString = lastTwoChars + string.substring(0,string.length - 2);
    // finalString = lastTwoChars + string.substr(0,string.length - 2);
    // finalString = lastTwoChars + string.slice(0,string.length - 2);
    finalString = lastTwoChars + string.slice(0,string.length - 2);
  }
  
  return finalString;
  
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
  
  return string1.length == 0 || string2.length == 0 ?
  "Empty string/s." : finalString;
  
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
function deFront(string){
  
  var result = "";
  var tempChar = "";
  
  if(string.charAt(0).toLowerCase() == "a" && string.charAt(1).toLowerCase() == "b"){
     result = string;
  }
  else if(string.charAt(0).toLowerCase() == "a"){
    result = string.charAt(0) + string.slice(2);
  }
  else if(string.charAt(1).toLowerCase() == "b"){
    result = string.charAt(1) + string.slice(2);
  }
  else{
    result = string.slice(2);
  }
  
  return result;
  
}

//Exercise08
function withoutX2(string){
  
  var finalString = "";
  
  if(string.charAt(0).toLowerCase() == "x" && string.charAt(1).toLowerCase() == "x"){
     finalString = string.slice(2);
  }
  else if(string.charAt(0).toLowerCase() == "x"){
    finalString = string.slice(1);
  }
  else if(string.charAt(1).toLowerCase() == "x"){
    finalString = string.charAt(0) + string.slice(2);
  }
  else{
    finalString = string;
  }
     
  return finalString;
  
}

//Exercise09
function lastChars(string1,string2){
  
  var finalString = "";
  
  if(string1.length == 0 && string2.length == 0){
    finalString = "@@";
  }
  else if(string1.length == 0){
    finalString = "@" + string2.slice(-1);
  }
  else if(string2.length == 0){
    finalString =  string1.charAt(0) + "@";
  }
  else{
    finalString = string1.charAt(0) + string2.slice(-1);   
  }
  
  return finalString;
  
}

//Exercise10
function middletwo(string){
  
  var finalString = "";
  var middle = string.length/2;
  
  return string.length % 2 == 0 ? 
  string.charAt(middle-1) + string.charAt(middle) : 
  "You have introduced a string that is not even.";
  
}
