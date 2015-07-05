"use strict";
	
$(document).ready(function(){
	var windowSize = ["1233", "733"];
	$(window).resize(function(){
    window.resizeTo(windowSize[0],windowSize[1]);
	});

	if(window.width != "1233" || window.height != "733"){
		window.resizeTo(windowSize[0],windowSize[1]);
	}

    var life = 3;  //set number of player's lives.
    var game = new Game(life);
   
    game.playGame();
});