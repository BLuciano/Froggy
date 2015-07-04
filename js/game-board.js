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
	var index = 0;

	for(index = 0; index < this.elementsLeft.length(); index++){
		this.loopElements();
		this.elementsLeft[index].animate(
			{left: -this.fps + this.elementsLeft[index].position().left + 
			"px"}, this.speed);
	} 
		
	for(index = 0; index < this.elementsRight.length; index++){
		if(index === this.elementsRight.length - 1){
			this.elementsRight[index].animate(
				{left: this.fps + this.elementsRight[index].position().left +
				 "px"}, this.speed, this.animateElements);
		} else {
			this.elementsRight[index].animate(
				{left: this.fps + this.elementsRight[index].position().left + 
				"px"}, this.speed);
		}
	}
} // end of animateElements functions

//Check to see if elements reach border of gameplay area. if so make them
//loop around from the opposite starting point.
GameBoard.prototype.loopElements = function(){
	var index = 0;
	for(index = 0; index < this.elementsRight.length; index++){
		if(this.elementsRight[index].position().left === 1000){
			this.elementsRight[index].css("left", "100px");
		}
	}
}
