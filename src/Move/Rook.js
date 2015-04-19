var Position = require('../Position.js');
var Piece = require('../Piece');
var util = require("util");

function Rook(color) {
    Piece.apply(this, arguments);
}

util.inherits(Rook, Piece);


Rook.prototype.getPossibleMoves = function (game, currentPosition) {
    var positions = [], newPosition;

    var moves = [-1, 1];

    //Horizontal moves
    for (var x = 0; x < moves.length; x++) {
        newPosition = currentPosition.addX(moves[x]);
        while (game.board.isPositionValid(newPosition)) {
            if(game.isPositionFree(newPosition)){
                positions.push(newPosition);
            }else{
                if(game.getPiece(newPosition).getColor() !== this.getColor()){
                    positions.push(newPosition);
                }
                break;
            }
            newPosition = newPosition.addX(moves[x]);
        }
    }

    //Vertical moves
    for (var y = 0; y < moves.length; y++) {
        newPosition = currentPosition.addY(moves[y]);
        while (game.board.isPositionValid(newPosition)) {
            if(game.isPositionFree(newPosition)){
                positions.push(newPosition);
            }else{
                if(game.getPiece(newPosition).getColor() !== this.getColor()){
                    positions.push(newPosition);
                }
                break;
            }
            newPosition = newPosition.addY(moves[y]);
        }
    }

    return positions;
};

module.exports = Rook;