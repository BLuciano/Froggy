"use strict";
$(document).ready(function(){
	var windowSize = ["1215", "775"];
	$(window).resize(function(){
    window.resizeTo(windowSize[0],windowSize[1]);
	});

	if(window.width != "1215" || window.height != "775"){
		window.resizeTo(windowSize[0],windowSize[1]);
	}

    var life = 3;  //set number of player's lives.
    var game = new Game(life);
   
	function Game(lives){
    	this.lives = lives;
	}

	Game.prototype.playGame = function(){
    	var board = new GameBoard();
   		setInterval(function(){
   			board.animateElements()}, 100); 
	} 

	game.playGame();
});
 

