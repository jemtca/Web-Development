
var randomArray = new Array(9);
var start = new Date();
var end = -1; //A way to finish the game
var moves = 0;

function scramble(){
  
  for(let i = 0; i < randomArray.length - 1; i++){
    random = Math.floor(Math.random() * 8 + 1);
      while(randomArray.includes(random)){
        random = Math.floor(Math.random() * 8 + 1);
      }
      randomArray[i] = random;
  }
  
  for(let i = 7; i > 3; i--){
    randomArray[i+1] = randomArray[i];
  }
  
  randomArray[4] = "";
  
  return randomArray;
   
}

function displayInformation(){

	if(end == -1){

		document.getElementById("p0").innerHTML = randomArray[0];
		document.getElementById("p1").innerHTML = randomArray[1];
		document.getElementById("p2").innerHTML = randomArray[2];
		document.getElementById("p3").innerHTML = randomArray[3];
		document.getElementById("p4").innerHTML = randomArray[4];
		document.getElementById("p5").innerHTML = randomArray[5];
		document.getElementById("p6").innerHTML = randomArray[6];
		document.getElementById("p7").innerHTML = randomArray[7];
		document.getElementById("p8").innerHTML = randomArray[8];

		document.getElementById("moves").innerHTML = "Moves: " + moves;
		document.getElementById("startTime").innerHTML = "Start time: " + start.getHours() + ":" + 
		start.getMinutes() + ":" + start.getSeconds();
	
		if(rightPositions()){

			end = new Date();

			document.getElementById("endTime").innerHTML = "End time: " + end.getHours() + ":" + 
			end.getMinutes() + ":" + end.getSeconds();

		}

	}
	else{

		return;

	}

}

function getId(ele){

	var id = ele.id;

	if(id == "p0" || id == "p2" || id == "p6" || id == "p8"){

		movements(id,2);

	}
	else if(id == "p1" || id == "p3" || id == "p5" || id == "p7"){

		movements(id,3);

	}
	else if(id == "p4"){

		movements(id,4);

	}

}

function movements(id,options){

	var idValue = Number(id[id.length - 1]); // string to  number, "ex" -> x
	var optionOne, optionTwo, optionThree, optionFour;

	if(options == 2){

		if(idValue == 0){
			
			optionOne = 1;
			optionTwo = 3;

		}
		else if(idValue == 2){

			optionOne = 1;
			optionTwo = 5;

		}
		else if(idValue == 6){

			optionOne = 3; //7
			optionTwo = 7; //3

		}
		else if(idValue == 8){

			optionOne = 5; //5
			optionTwo = 7; //7

		}

		if(randomArray[optionOne] == ""){

			randomArray[optionOne] = randomArray[idValue];
			randomArray[idValue] = "";
			moves++;

		}
		else if(randomArray[optionTwo] == ""){

			randomArray[optionTwo] = randomArray[idValue];
			randomArray[idValue] = "";
			moves++;

		}

	}

	else if(options == 3){

		if(idValue == 1){

			optionOne = 0;
			optionTwo = 2;
			optionThree = 4;

		}
		else if(idValue == 3){

			optionOne = 0; //4
			optionTwo = 4; //0
			optionThree = 6; //

		}
		else if(idValue == 5){

			optionOne = 2; //4
			optionTwo = 4; //2
			optionThree = 8;

		}
		else if(idValue == 7){

			optionOne = 4; //6
			optionTwo = 6; //8
			optionThree = 8; //4

		}

		if(randomArray[optionOne] == ""){
			
			randomArray[optionOne] = randomArray[idValue];
			randomArray[idValue] = "";
			moves++;

		}
		else if(randomArray[optionTwo] == ""){
			
			randomArray[optionTwo] = randomArray[idValue];
			randomArray[idValue] = "";
			moves++;

		}
		else if(randomArray[optionThree] == ""){

			randomArray[optionThree] = randomArray[idValue];
			randomArray[idValue] = "";
			moves++;

		}

	}

	else if(options == 4){

		if(idValue == 4){

			optionOne = 1; //3
			optionTwo = 3; //5
			optionThree = 5; //1
			optionFour = 7; //7

			if(randomArray[optionOne] == ""){

				randomArray[optionOne] = randomArray[idValue];
				randomArray[idValue] = "";
				moves++;

			}
			else if(randomArray[optionTwo] == ""){

				randomArray[optionTwo] = randomArray[idValue];
				randomArray[idValue] = "";
				moves++;

			}
			else if(randomArray[optionThree] == ""){

				randomArray[optionThree] = randomArray[idValue];
				randomArray[idValue] = "";
				moves++;

			}
			else if(randomArray[optionFour] == ""){

				randomArray[optionFour] = randomArray[idValue];
				randomArray[idValue] = "";
				moves++;

			}

		}

	}

	displayInformation();

}

function rightPositions(){

    var bool = false;

    if(randomArray[0] == 1 && randomArray[1] == 2 && randomArray[2] == 3 && 
    	randomArray[3] == 4 && randomArray[4] == 5 && randomArray[5] == 6 && 
    	randomArray[6] == 7 && randomArray[7] == 8 && randomArray[8] == ""){
        	
       		bool = true;

    }

    return bool;

}

scramble();
displayInformation();
