"use strict";
	//set the new window's size to 
	var windowSize = ["1215", "775"];
	$(window).resize(function(){
    window.resizeTo(windowSize[0],windowSize[1]);
	});
	if(window.width != "1215" || window.height != "775"){
		window.resizeTo(windowSize[0],windowSize[1]);
	}

	var $input = $("#text-input");
	var $frogPos = $("#froggy").position();
    var life = 3;  //set number of player's lives.
    var game = new Game(life);
   
	function Game(lives){
		this.level = 1;
    	this.lives = lives;
	}

	Game.prototype.playGame = function(){
    	var board = new GameBoard();
   		setInterval(function(){
   			board.animateElements()}, 100); 
	} 

	Game.prototype.lost = function(){
	
	}

	Game.prototype.won = function(left, top){
		if(left === 560 && top < 40){
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
		if(this.level === 3){
			this.level = 1;   //reset level to 1
			$input.html("<h1>Congratulations!!!</h1>" +
						"<p>You won the game!</p>");	
			$input.show();
		
		} else {
			$input.html("<p>Level won</p>" +
						"<p>Current Level: " + this.level + "</p>" +
						"<p>Lives left: " + this.lives + "</p>");	
			$input.show();
		}
	}
	
	game.playGame();

 

