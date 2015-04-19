var Position = require('../Position.js');
var Piece = require('../Piece');
var util = require("util");

function Pawn(color) {
    Piece.apply(this, arguments);
}

util.inherits(Pawn, Piece);

Pawn.prototype.getPossibleMoves = function (game, currentPosition) {
    var positions = [];

    var upPosition = currentPosition.addY(1);
    if (game.board.isPositionValid(upPosition) && (game.isPositionFree(upPosition) || game.getPiece(upPosition).getColor() !== this.getColor())) {
        positions.push(upPosition);
    }

    return positions;
};

module.exports = Pawn;