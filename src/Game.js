var PositionAlreadyTakenError = require('../src/Error/PositionAlreadyTakenError');

function Game(board) {
    this.board = board;
    this.pieces = {};
}

Game.prototype.addPiece = function(position, piece){
    if(this.pieces[position]){
        throw new PositionAlreadyTakenError(position);
    }
    this.pieces[position] = piece;
    return true;
};

module.exports = Game;