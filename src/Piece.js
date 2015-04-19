function Piece(color) {
    this.color = color;
}
Piece.prototype.getColor = function(){
    return this.color;
};

Piece.WHITE = 'W';
Piece.BLACK = 'B';
module.exports = Piece;