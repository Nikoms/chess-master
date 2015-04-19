var PositionRange = require('../src/PositionRange');
var Position = require('../src/Position');
var assert = require("assert");
var Board = require('../src/Board.js');
var Game = require('../src/Game.js');
var Piece = require('../src/Piece.js');
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

BoardMoveTester.prototype.getEmptyBoardRepresentation = function () {
    var boardRepresentation = [];
    for (var height = 0; height < this.height; height++) {
        boardRepresentation[height] = '';
        for (var width = 0; width < this.width; width++) {
            boardRepresentation[height] += '#';
        }
    }
    return boardRepresentation;
};

BoardMoveTester.prototype.getPositionsRepresentation = function (positions) {
    var representation = this.getEmptyBoardRepresentation();
    positions.forEach(function (position) {
        representation = this.addRepresentationValueAtPosition(representation, 'X', position);
    }, this);

    representation = this.addRepresentationValueAtPosition(representation, '0', this.getMasterPiecePosition());
    return representation;
};

BoardMoveTester.prototype.addRepresentationValueAtPosition = function (representation, value, position) {
    var verticalPosition = this.convertHeightToPosition(position.getY());
    var lineRepresentation = representation[verticalPosition];
    representation[verticalPosition] = lineRepresentation.substr(0, position.getX()) + value + lineRepresentation.substr(position.getX() + 1);
    return representation;
};

BoardMoveTester.prototype.assertPossibleMoves = function (piece) {

    var calculatedPossibleMoves = piece.getPossibleMoves(this.getGame(), this.getMasterPiecePosition());

    var errorMessage = ['Expected : ', "\n", this.movesRepresentation.join("\n"), "\n", '. Received : ', "\n", this.getPositionsRepresentation(calculatedPossibleMoves).join("\n")];
    var expectedMoves = this.getPossibleMoves();
    assert.equal(expectedMoves.length, calculatedPossibleMoves.length, errorMessage.join(''));

    for (var i = 0; i < calculatedPossibleMoves.length; i++) {
        var positionFounded = false;
        for (var j = 0; j < expectedMoves.length; j++) {
            if (calculatedPossibleMoves[i].toString() === expectedMoves[j].toString()) {
                positionFounded = true;
            }
        }
        assert.equal(true, positionFounded, errorMessage);
    }
};

//Because the first line is not 0, but "7" for example.
BoardMoveTester.prototype.convertHeightToPosition = function (height) {
    return Math.abs(height - (this.height - 1));
};

BoardMoveTester.prototype.getMasterPiecePosition = function () {
    return this.getRepresentationCharacterPositions('0').pop();
};

BoardMoveTester.prototype.getPossibleMoves = function () {
    return this.getRepresentationCharacterPositions('X').concat(this.getBlackPiecesPositions());
};

BoardMoveTester.prototype.getWhitePiecesPositions = function () {
    return this.getRepresentationCharacterPositions('W');
};

BoardMoveTester.prototype.getBlackPiecesPositions = function () {
    return this.getRepresentationCharacterPositions('B');
};


BoardMoveTester.prototype.getRepresentationCharacterPositions = function(character){
    var positions = [];
    for (var height = 0; height < this.height; height++) {
        for (var width = 0; width < this.width; width++) {
            var currentCharacter = this.movesRepresentation[height][width];
            if (currentCharacter === character) {
                positions.push(new Position(width, this.convertHeightToPosition(height)));
            }
        }
    }
    return positions;
};

BoardMoveTester.prototype.getPositionRange = function () {
    return new PositionRange(new Position(0, 0), new Position(this.width - 1, this.height - 1));
};

BoardMoveTester.prototype.getGame = function () {
    var i;
    var game = new Game(new Board(this.getPositionRange()));
    var whitePiecesPositions = this.getWhitePiecesPositions();
    for (i = 0; i < whitePiecesPositions.length; i++) {
        game.addPiece(whitePiecesPositions[i], new Piece(Piece.WHITE));
    }
    var blackPiecesPositions = this.getBlackPiecesPositions();
    for (i = 0; i < blackPiecesPositions.length; i++) {
        game.addPiece(blackPiecesPositions[i], new Piece(Piece.BLACK));
    }
    return game;
};


module.exports = BoardMoveTester;