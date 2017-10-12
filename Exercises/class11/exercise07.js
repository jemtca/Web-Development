function count(string,word){

  var index = 0;
  var times = 0;
  var spaces = 0;
  
  for(var i = 0; i < string.length; i++){
	  if(string[i] == " "){
      spaces++;
      if(string.substring(index,i).toLowerCase() == word.toLowerCase()){
        times++;
      }
      index = i + 1;
    }
	}
  
  if(string.endsWith(word.toLowerCase())){
    times++;
  }

  if(word == ""){
     return "[word] parameter is undefined.";
     }
  else if(word != " "){
     return times + "white spaces."; //ask to rodrigo
     }
  else{
     return spaces;
   }
}

// console.log(count("The quick brown fox jumps over the lazy dog",'the')); -> Output: 2
// console.log(count("The quick brown fox jumps over the lazy dog",'fox',false)); -> Output: 1
