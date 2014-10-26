function Game(board) {
    this.board = board;
    this.pieces = {};
}

Game.prototype.addPiece = function(position, piece){
    this.pieces[position] = piece;
    return true;
};

module.exports = Game;