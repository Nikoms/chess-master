var PositionAlreadyTakenError = require('../src/Error/PositionAlreadyTakenError');
var InvalidPositionError = require('../src/Error/InvalidPositionError');

function Game(board) {
    this.board = board;
    this.pieces = {};
}

Game.prototype.addPiece = function(position, piece){
    if(this.pieces[position]){
        throw new PositionAlreadyTakenError(position);
    }
    if(!this.board.isPositionValid(position)){
        throw new InvalidPositionError(position);
    }
    this.pieces[position] = piece;
    return this;
};

module.exports = Game;