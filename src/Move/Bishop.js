var Position = require('../Position.js');
var Piece = require('../Piece');
var util = require("util");

function Bishop(color) {
    Piece.apply(this, arguments);
}

util.inherits(Bishop, Piece);

Bishop.prototype.getPossibleMoves = function (game, currentPosition) {
    var positions = [];

    var moves = [-1, 1];

    for (var x = 0; x < moves.length; x++) {
        for (var y = 0; y < moves.length; y++) {
            var newPosition = currentPosition.addX(moves[x]).addY(moves[y]);
            while (game.board.isPositionValid(newPosition)) {
                if(game.isPositionFree(newPosition)){
                    positions.push(newPosition);
                }else{
                    if(game.getPiece(newPosition).getColor() !== this.getColor()){
                        positions.push(newPosition);
                    }
                    break;
                }
                newPosition = newPosition.addX(moves[x]).addY(moves[y]);
            }
        }
    }
    return positions;
};

module.exports = Bishop;