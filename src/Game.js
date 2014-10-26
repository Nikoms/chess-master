function Game(board) {
    this.board = board;
    this.pieces = {};
}

Game.prototype.addPiece = function(position, piece){
    if(this.pieces[position]){
        throw new Error('A piece already exists at position ' + position);
    }
    this.pieces[position] = piece;
    return true;
};

module.exports = Game;