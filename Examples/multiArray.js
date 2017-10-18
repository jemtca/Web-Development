function printMultiArray(){

  var multiArray = [["a0","b0","c0","d0","e0"],
                   ["a1","b1","c1","d1"]];

  for(let row = 0; row < multiArray.length; row++){
    for(let col = 0; col < multiArray[row].length; col++){
      console.log(multiArray[row][col]);
    }
  }

}
