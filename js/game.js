"use strict";

function Game(lives){
    this.lives = lives;
}

Game.prototype.playGame = function(){
    var board = new GameBoard();
    board.animateElements(); 
} 

 

