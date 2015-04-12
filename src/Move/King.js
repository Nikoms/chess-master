var Position = require('../Position.js');

function addPositionIfValid(positions, currentPosition, addendX, addendY, game){
    try{
        var newPosition = currentPosition.addX(addendX).addY(addendY);
        if(!game.board.isPositionValid(newPosition) || !game.isPositionFree(newPosition)){
            return;
        }
        positions.push(newPosition);
    }catch(error){
        //console.log(error);
    }
}

function King() {
}

King.prototype.getPossibleMoves = function (game, currentPosition){
    var positions = [];
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