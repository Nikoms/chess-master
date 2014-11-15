var Position = require('../Position.js');

function Pawn(position) {
    this.position = position;
}

Pawn.prototype.getPossibleMoves = function (game) {
    var positions = [];

    var upPosition = this.position.addY(1);
    if (game.board.isPositionValid(upPosition)) {
        positions.push(upPosition);
    }

    return positions;
};

module.exports = Pawn;