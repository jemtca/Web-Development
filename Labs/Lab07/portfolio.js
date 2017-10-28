
var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function myFunction(){
	
	if(window.pageYOffset >= sticky){

    	navbar.classList.add("sticky");
  
  	}
  	else{

    	navbar.classList.remove("sticky");
  
  }

}


function myFunction2(){

    var x = document.getElementById("myTopnav");
    
    if(x.className === "navbar"){

        x.className += " responsive";
    
    }
    else{

        x.className = "navbar";
    
    }

}
