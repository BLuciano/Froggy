"use strict";
$(document).ready(function(){
	var windowSize = ["1200", "700"];
	$(window).resize(function(){
    window.resizeTo(windowSize[0],windowSize[1]);
	});

	if(window.width != "1200" || window.height != "700"){
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
 

