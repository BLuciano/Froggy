$(document).ready(function(){
    playGame();
}); 

function playGame(){
	var speed = 10;
	var frames = 40;
	var lives = 3;
	var elementsRight = [$("#bottom-car1"), $("#bottom-car2"), $("#upper-car1"), 
						 $("#upper-car2"),  $("#long-log"), $("#short-log"), 
						 $("#top-log1"), $("#top-log2")];
	var elementsLeft = [$("#middle-car1"), $("#middle-car2"), $("#middle-car3"), 
						$("#top-car1"), $("#top-car2"), $("#top-car3"), $("#plant-3"),
						$("#plant-2")];
	animateElements();
	
	//Sets animation for cars, logs and plants to run continously.
	function animateElements() {
		var index = 0;
		//lost();
		//won();
		
	

		for(index = 0; index < elementsLeft.length; index++){
			loopElements();
			elementsLeft[index].animate(
				{left: -frames + elementsLeft[index].position().left + "px"}, speed);
		} 
		
		for(index = 0; index < elementsRight.length; index++){
			if(index === elementsRight.length - 1){
				elementsRight[index].animate(
					{left: frames + elementsRight[index].position().left + "px"}, 
					speed, animateElements);
			} else {
				elementsRight[index].animate(
					{left: frames + elementsRight[index].position().left + "px"}, speed);
			}
		}
	} // end of animateElements functions

	//Check to see if elements reach border of gameplay area. if so make them
	//loop around from the opposite starting point.
	function loopElements(){
		var index = 0;
		for(index = 0; index < elementsRight.length; index++){
			if(elementsRight[index].position().left === 1000){
				elementsRight[index].css("left", "100px");
			}
		}
	}


	// check to see if player lost by either touching a car or falling in the water.
	function lost() {

	}// end of lost function


	// check to see if player made it to the winning spot.
	function won() {


	} //end of won function
 
}// End of playGame function

