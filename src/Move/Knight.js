var Position = require('../Position.js');
var Piece = require('../Piece');
var util = require("util");

function Knight(color) {
    Piece.apply(this, arguments);
}

util.inherits(Knight, Piece);

function _addPositionIfValid(positions, currentPosition, addendX, addendY, game){
    var newPosition = currentPosition.addX(addendX).addY(addendY);
    if(game.board.isPositionValid(newPosition)){
        if(game.isPositionFree(newPosition)){
            positions.push(newPosition);
        }else{
            if(game.getPiece(newPosition).getColor() !== this.getColor()){
                positions.push(newPosition);
            }
        }
    }
}

Knight.prototype.getPossibleMoves = function (game, currentPosition){
    var positions = [];
    var addPositionIfValid = _addPositionIfValid.bind(this);

    //Bottom left
    addPositionIfValid(positions, currentPosition, -2, -1, game);
    addPositionIfValid(positions, currentPosition, -1, -2, game);

    //Bottom right
    addPositionIfValid(positions, currentPosition, 2, -1, game);
    addPositionIfValid(positions, currentPosition, 1, -2, game);

    //Top left
    addPositionIfValid(positions, currentPosition, -1, 2, game);
    addPositionIfValid(positions, currentPosition, -2, 1, game);

    //Top right
    addPositionIfValid(positions, currentPosition, 1, 2, game);
    addPositionIfValid(positions, currentPosition, 2, 1, game);

    return positions;
};

module.exports = Knight;