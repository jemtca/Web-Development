function string_parameterize(string){
  
  var newString = "";
  
  for(i = 0; i < string.length; i++){
    if(string[i] != " "){
      newString = newString + string[i];
    }
    else{
      newString = newString + "-";
    }
  }
  
  return newString.toLowerCase();
  
}

// console.log(string_parameterize("Robin Singh from USA.")); -> "robin-singh-from-usa"
