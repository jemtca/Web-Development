function is_string(string){
  
  var bool = false;
  
  if(typeof string == "string"){
     console.log(typeof string);
    bool = true;
  }
  
  return bool;
  
}

// console.log(is_string('JavaScript')); -> true

// console.log(is_string([1,   2,   4,   0])); -> false
