"use strict";
	
$(document).ready(function(){
    var life = 3;  //set number of player's lives.
   
    var game = new Game(life);
    game.playGame();
});