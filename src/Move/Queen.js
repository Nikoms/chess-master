var Position = require('../Position.js');
var Rook = require('./Rook.js');
var Bishop = require('./Bishop.js');
var Piece = require('../Piece');
var util = require("util");

function Queen(color) {
    Piece.apply(this, arguments);
}

util.inherits(Queen, Piece);

Queen.prototype.getPossibleMoves = function (game, currentPosition) {
    var bishopMoves = new Bishop(this.getColor()).getPossibleMoves(game, currentPosition);
    var rookMoves = new Rook(this.getColor()).getPossibleMoves(game, currentPosition);

    return bishopMoves.concat(rookMoves);
};

module.exports = Queen;