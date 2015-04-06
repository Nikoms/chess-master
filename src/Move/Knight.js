var Position = require('../Position.js');

function addPositionIfValid(positions, currentPosition, addendX, addendY, board){
    var newPosition = currentPosition.addX(addendX).addY(addendY);
    if(board.isPositionValid(newPosition)){
        positions.push(newPosition);
    }
}



function Knight() {
}

Knight.prototype.getPossibleMoves = function (game, currentPosition){
    var positions = [];

    //Bottom left
    addPositionIfValid(positions, currentPosition, -2, -1, game.board);
    addPositionIfValid(positions, currentPosition, -1, -2, game.board);

    //Bottom right
    addPositionIfValid(positions, currentPosition, 2, -1, game.board);
    addPositionIfValid(positions, currentPosition, 1, -2, game.board);

    //Top left
    addPositionIfValid(positions, currentPosition, -1, 2, game.board);
    addPositionIfValid(positions, currentPosition, -2, 1, game.board);

    //Top right
    addPositionIfValid(positions, currentPosition, 1, 2, game.board);
    addPositionIfValid(positions, currentPosition, 2, 1, game.board);

    return positions;
};

module.exports = Knight;