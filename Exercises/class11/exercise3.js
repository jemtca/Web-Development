function capitalize(string){
  
  var newString = string.substring(0,1).toUpperCase();
  
  for(i = 1; i < string.length; i++){
      newString = newString + string[i];
  }

  return newString;
  
}

// console.log(capitalize('js string exercises'));
