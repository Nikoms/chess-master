var Position = require('../Position.js');
var Piece = require('../Piece');
var util = require("util");

function King(color) {
    Piece.apply(this, arguments);
}

util.inherits(King, Piece);

function _addPositionIfValid(positions, currentPosition, addendX, addendY, game){
    try{
        var newPosition = currentPosition.addX(addendX).addY(addendY);
        if(!game.board.isPositionValid(newPosition)){
            return;
        }
        if(!game.isPositionFree(newPosition)){
            if(game.getPiece(newPosition).getColor() === this.getColor()){
                return;
            }
        }
        positions.push(newPosition);
    }catch(error){
        console.log(error);
    }
}


King.prototype.getPossibleMoves = function (game, currentPosition){
    var positions = [];

    var addPositionIfValid = _addPositionIfValid.bind(this);

    addPositionIfValid(positions, currentPosition, -1, -1, game);
    addPositionIfValid(positions, currentPosition, 0, -1, game);
    addPositionIfValid(positions, currentPosition, +1, -1, game);

    addPositionIfValid(positions, currentPosition, -1, 0, game);
    addPositionIfValid(positions, currentPosition, +1, 0, game);

    addPositionIfValid(positions, currentPosition, -1, +1, game);
    addPositionIfValid(positions, currentPosition, 0, +1, game);
    addPositionIfValid(positions, currentPosition, +1, +1, game);

    return positions;
};

module.exports = King;