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

//Exercise06

//Exercise07

//Exercise08

//Exercise09

//Exercise10
