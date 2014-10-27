var Position = require('../Position.js');

function addPositionIfValid(positions, currentPosition, addendX, addendY, board){
    try{
        var newPosition = currentPosition.addX(addendX).addY(addendY);
        if(!board.isPositionValid(newPosition)){
            return;
        }
        positions.push(newPosition);
    }catch(error){
        //console.log(error);
    }
}

function King(position) {
    this.position = position;
}

King.prototype.getPossibleMoves = function (game){
    var positions = [];
    addPositionIfValid(positions, this.position, -1, -1, game.board);
    addPositionIfValid(positions, this.position, 0, -1, game.board);
    addPositionIfValid(positions, this.position, +1, -1, game.board);

    addPositionIfValid(positions, this.position, -1, 0, game.board);
    addPositionIfValid(positions, this.position, +1, 0, game.board);

    addPositionIfValid(positions, this.position, -1, +1, game.board);
    addPositionIfValid(positions, this.position, 0, +1, game.board);
    addPositionIfValid(positions, this.position, +1, +1, game.board);

    return positions;
};

module.exports = King;