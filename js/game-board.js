"use strict";

function GameBoard(){
	this.speed = 10;
	this.fps = 40;
	this.elementsRight = [$("#bottom-car1"), $("#bottom-car2"), $("#upper-car1"), 
					$("#upper-car2"),  $("#long-log"), $("#short-log"), 
					$("#top-log1"), $("#top-log2")];
	this.elementsLeft = [$("#middle-car1"), $("#middle-car2"), $("#middle-car3"), 
					$("#top-car1"), $("#top-car2"), $("#top-car3"), $("#plant-3"),
					$("#plant-2")];
}

//Sets animation for cars, logs and plants to run continously.
GameBoard.prototype.animateElements = function(){
	var index;
	var left = this.elementsLeft;
	var right = this.elementsRight;
	
	for(index = 0; index < left.length; index++){
		if(left[index].position().left < -200){
			left[index].css("left", "1250px");
		} else {
			left[index].animate(
				{left: -this.fps + left[index].position().left + 
				"px"}, this.speed);
		}
	}//end for-loop 

	for(index = 0; index < right.length; index++){
		if(right[index].position().left > 1150){
			right[index].css("left", "-100px");
		}else{
			right[index].animate(
				{left: this.fps + right[index].position().left + 
				"px"}, this.speed);
		}
	}//end for-lopp	
} // end of animateElements functions