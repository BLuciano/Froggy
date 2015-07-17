"use strict";

var $input = $("#text-input");
var $frogPos = $("#froggy").position();
var life = 3; 
var game = new Game(life);
   
function Game(lives){
	this.level = 1;
    this.lives = lives;
    this.playing = true;   //Allows for user controllers to be on/off
}

//Checks to see if the user is on top of a plant or log.
Game.prototype.inRange = function(frog, elem){
	if(frog > elem - 50 && frog < elem + 100){
		return true;
	} else {
		return false;
	}
}// end inRange method

//Checks to see if user lost to a car or water
Game.prototype.lost = function(elem){
	var left = elem.position().left;
	var top = elem.position().top;
	var frogL = $("#froggy").position().left;
	var frogT = $("#froggy").position().top;
	var item = elem.attr('id');
	
	if(frogT === 190 && (item==="bottom-log1" || 
	item==="bottom-log2" || item==="bottom-log3") &&
	this.inRange(frogL, left)){
		$("#froggy").animate(
			{left: 40 + frogL + "px"}, 10);
		if(frogL > 1150){   //out of bounds
			return true;
		} 
	}
	else if(frogT === 120 &&(item==="plant1" || 
	item==="plant2" || item==="plant3") &&
	this.inRange(frogL, left + 30)){
		$("#froggy").animate(
			{left: -40 + frogL + "px"}, 10);
		if(frogL < -25){   //out of bounds
			return true;
		}
	}
	else if(frogT === 50 &&(item==="top-log1" || 
	item==="top-log2") && this.inRange(frogL, left)){
		$("#froggy").animate(
			{left: 40 + frogL + "px"}, 10);
		if(frogL > 1150){   //out of bounds
			return true;
		}
	}
	
	else {
		if((frogL > left - 30 && frogL < left + 30) && frogT === top){
			return true;
		} else{ 
			return false;
		}
	}
} //end of lost method

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
	game.lives--;
	this.playing = false;

	//reload game once the game is lost if user wants.
	if(this.lives === 0){
		$input.html("<h1>GAME OVER</h1>" +
					"<p>Press Enter to play again...</p>");	
		$input.show();

		$(document).keydown(function(e) {
			if(e.keyCode === 13) {
				location.reload();
			}
		});//end of keydown
	}	
	//Else continue game, place frog back at starting area.
	else {
		$input.html("<p>You lost!</p>" +
					"<p>Current Level: " + this.level + "</p>" +
					"<p>Lives left: " + this.lives + "</p>" +
					"<p>Press Enter to continue...</p>");	
		$input.show();
			
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
}//End of lostScreen method

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
		
		//change background image according to level	
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

//Sets the view of the game
Game.prototype.playGame = function(){
   	var board = new GameBoard();
  	setInterval(function(){
   		board.animateElements()}, 100); 
} 
	
game.playGame();

 

