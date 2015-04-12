var Position = require('../Position.js');

function Rook() {
}

Rook.prototype.getPossibleMoves = function (game, currentPosition) {
    var positions = [], newPosition;

    var moves = [-1, 1];

    //Horizontal moves
    for (var x = 0; x < moves.length; x++) {
        newPosition = currentPosition.addX(moves[x]);
        while (game.board.isPositionValid(newPosition) && game.isPositionFree(newPosition)) {
            positions.push(newPosition);
            newPosition = newPosition.addX(moves[x]);
        }
    }

    //Vertical moves
    for (var y = 0; y < moves.length; y++) {
        newPosition = currentPosition.addY(moves[y]);
        while (game.board.isPositionValid(newPosition) && game.isPositionFree(newPosition)) {
            positions.push(newPosition);
            newPosition = newPosition.addY(moves[y]);
        }
    }

    return positions;
};

module.exports = Rook;