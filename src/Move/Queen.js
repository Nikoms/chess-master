var Position = require('../Position.js');
var Rook = require('./Rook.js');
var Bishop = require('./Bishop.js');

function Queen() {
}

Queen.prototype.getPossibleMoves = function (game, currentPosition) {
    var bishopMoves = new Bishop().getPossibleMoves(game, currentPosition);
    var rookMoves = new Rook().getPossibleMoves(game, currentPosition);

    return bishopMoves.concat(rookMoves);
};

module.exports = Queen;