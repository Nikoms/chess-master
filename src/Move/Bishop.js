var Position = require('../Position.js');

function Bishop(position) {
    this.position = position;
}

Bishop.prototype.getPossibleMoves = function (game){
    var positions = [];

    var moves = [-1,1];

    for(var x = 0 ; x < moves.length ; x++){
        for(var y = 0 ; y < moves.length ; y++) {
            var newPosition = this.position.addX(moves[x]).addY(moves[y]);
            while(game.board.isPositionValid(newPosition)){
                positions.push(newPosition);
                newPosition = newPosition.addX(moves[x]).addY(moves[y]);
            }
        }
    }
    return positions;
};

module.exports = Bishop;