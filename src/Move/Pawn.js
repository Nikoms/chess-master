var Position = require('../Position.js');

function Pawn() {
}

Pawn.prototype.getPossibleMoves = function (game, currentPosition) {
    var positions = [];

    var upPosition = currentPosition.addY(1);
    if (game.board.isPositionValid(upPosition) && game.isPositionFree(upPosition)) {
        positions.push(upPosition);
    }

    return positions;
};

module.exports = Pawn;