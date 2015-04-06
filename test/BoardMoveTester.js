var PositionRange = require('../src/PositionRange');
var Position = require('../src/Position');
var assert = require("assert");
var Board = require('../src/Board.js');
var Game = require('../src/Game.js');
//Example: X = possible move, 0 = current position, # = free position
//var movesRepresentation = [
//    'X###X',
//    '#X#X#',
//    '##0##',
//    '#X#X#',
//    'X###X'];

function BoardMoveTester(movesRepresentation) {
    this.movesRepresentation = movesRepresentation;
    this.height = movesRepresentation.length;
    this.width = movesRepresentation[0].length;
}

BoardMoveTester.prototype.assertPossibleMoves = function (possibleMoves) {
    var errorMessage = ['Expected : ', this.getPossibleMoves(), '. Received : ', possibleMoves];
    var expectedMoves = this.getPossibleMoves();
    assert.equal(expectedMoves.length, possibleMoves.length, errorMessage);

    for (var i = 0; i < possibleMoves.length; i++) {
        var positionFounded = false;
        for (var j = 0; j < expectedMoves.length; j++) {
            if (possibleMoves[i].toString() === expectedMoves[j].toString()) {
                positionFounded = true;
            }
        }
        assert.equal(true, positionFounded, possibleMoves[i] + ' was not found');
    }
};

//Because the first line is not 0, but "7" for example.
BoardMoveTester.prototype.convertHeightToPosition = function(height){
  return Math.abs(height - (this.height - 1));
};

BoardMoveTester.prototype.getMasterPiecePosition = function(){
    for (var height = 0; height < this.height; height++) {
        for (var width = 0; width < this.width; width++) {
            var currentCharacter = this.movesRepresentation[height][width];
            if (currentCharacter === '0'){
                return new Position(width, this.convertHeightToPosition(height));
            }
        }
    }
    return null;
};

BoardMoveTester.prototype.getPossibleMoves = function () {
    var possibleMoves = [];
    for (var height = 0; height < this.height; height++) {
        for (var width = 0; width < this.width; width++) {
            var currentCharacter = this.movesRepresentation[height][width];
            if (currentCharacter === 'X') {
                possibleMoves.push(new Position(width, this.convertHeightToPosition(height)));
            }
        }
    }
    return possibleMoves;
};
BoardMoveTester.prototype.getPositionRange = function () {
    return new PositionRange(new Position(0, 0), new Position(this.width - 1, this.height - 1));
};

BoardMoveTester.prototype.getGame = function() {
  return new Game(new Board(this.getPositionRange()));
};



module.exports = BoardMoveTester;