function concatenates(string,times){
  
  var result = "";
  
  if(times == undefined){
     result = string;
     }
  else{
    for(i = 0; i < times; i++){
      result = result + string;
    }
  }
  
  return result;
  
}

// console.log(repeat('Ha!')); -> "Ha!"
// console.log(repeat('Ha!',2)); -> "Ha!Ha!"
// console.log(repeat('Ha!',3)); -> "Ha!Ha!Ha!"
