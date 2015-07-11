"use strict";

//set the new window's size to be fixed (not resizeable by user).
var windowSize = ["1215", "775"];
$(window).resize(function(){
   window.resizeTo(windowSize[0],windowSize[1]);
});
if(window.width != "1215" || window.height != "775"){
	window.resizeTo(windowSize[0],windowSize[1]);
}

var $input = $("#text-input");
var $frogPos = $("#froggy").position();
var life = 3; 
var game = new Game(life);
   
function Game(lives){
	this.level = 1;
    this.lives = lives;
    this.playing = true;   //Allows for user controllers to be on/off
}

//Sets the view of the game
Game.prototype.playGame = function(){
   	var board = new GameBoard();
  	setInterval(function(){
   		board.animateElements()}, 100); 
} 

//Checks to see if user lost to a car or water
Game.prototype.lost = function(){
	
}

//Checks to see if user made it to the winning spot.
Game.prototype.won = function(left, top){
	if((left >= 550 && left <= 570) && top < 51){
		this.level++;
		return true;
	} else{ return false;}
}

//When game is lost or won display current game level and lives.
//if level 3 is reached or all lives ran out game is reseted.
Game.prototype.lostScreen = function(){

}

//when game is won display current game level and lives.
//if level 3 is reached game is won and resets game.
Game.prototype.wonScreen = function(){
	this.playing = false;
		
	//reload game once the game is won if user wants.
	if(this.level === 4){
		$input.html("<h1>Congratulations!!!</h1>" +
					"<p>You won the game!</p>" +
					"<p>Press Enter to play again...</p>");	
		$input.show();

		$(document).keydown(function(e) {
			if(e.keyCode === 13) {
				location.reload();
			}
		});//end of keydown		
	//Else continue game, place frog back at starting area.
	} else {
		$input.html("<p>Level won</p>" +
					"<p>Current Level: " + this.level + "</p>" +
					"<p>Lives left: " + this.lives + "</p>" +
					"<p>Press Enter to continue...</p>");	
		$input.show();
			
		if(this.level === 2){
			$("#wrapper").removeClass("level1").addClass("level2");
		} else if(this.level === 3){
			$("#wrapper").removeClass("level2").addClass("level3");
		}

		$(document).keydown(function(e) {
			if(e.keyCode === 13) {
				game.playing = true;
				$input.hide();
				$("#froggy").css("top", "610px");
				$("#froggy").css("left", "560px");
				$("#froggy Img").attr('src', "img/frogback.gif");				
			}
		}); //end of keydown
	} //end if-else statement
}//end of wonScreen method
	
game.playGame();

 

