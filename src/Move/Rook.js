var Position = require('../Position.js');

function Rook(position) {
    this.position = position;
}

Rook.prototype.getPossibleMoves = function (game){
    var positions = [], newPosition;

    var moves = [-1,1];

    //Horizontal moves
    for(var x = 0 ; x < moves.length ; x++){
        newPosition = this.position.addX(moves[x]);
        while(game.board.isPositionValid(newPosition)){
            positions.push(newPosition);
            newPosition = newPosition.addX(moves[x]);
        }
    }

    //Vertical moves
    for(var y = 0 ; y < moves.length ; y++) {
        newPosition = this.position.addY(moves[y]);
        while(game.board.isPositionValid(newPosition)){
            positions.push(newPosition);
            newPosition = newPosition.addY(moves[y]);
        }
    }

    return positions;
};

module.exports = Rook;