"use strict";

function Game(lives){
    this.lives = lives;
}

//
Game.prototype.playGame = function(){
    var board = new GameBoard();
   	setInterval(function(){
   		board.animateElements()}, 100); 
} 

 

