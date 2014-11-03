var Position = require('../Position.js');

function Bishop(position) {
    this.position = position;
}

Bishop.prototype.getPossibleMoves = function (game){
    var positions = [];

    //Go bottom left
    var newPosition = this.position.addX(-1).addY(-1);
    while(game.board.isPositionValid(newPosition)){
        positions.push(newPosition);
        newPosition = newPosition.addX(-1).addY(-1);
    }

    //Go bottom right
    newPosition = this.position.addX(1).addY(-1);
    while(game.board.isPositionValid(newPosition)){
        positions.push(newPosition);
        newPosition = newPosition.addX(1).addY(-1);
    }

    //Go top left
    newPosition = this.position.addX(-1).addY(1);
    while(game.board.isPositionValid(newPosition)){
        positions.push(newPosition);
        newPosition = newPosition.addX(-1).addY(1);
    }

    //Go top right
    newPosition = this.position.addX(1).addY(1);
    while(game.board.isPositionValid(newPosition)){
        positions.push(newPosition);
        newPosition = newPosition.addX(1).addY(1);
    }
    return positions;
};

module.exports = Bishop;