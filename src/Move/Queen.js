var Position = require('../Position.js');
var Rook = require('./Rook.js');
var Bishop = require('./Bishop.js');

function Queen(position) {
    this.position = position;
}

Queen.prototype.getPossibleMoves = function (game) {
    var bishopMoves = new Bishop(this.position).getPossibleMoves(game);
    var rookMoves = new Rook(this.position).getPossibleMoves(game);

    return bishopMoves.concat(rookMoves);
};

module.exports = Queen;