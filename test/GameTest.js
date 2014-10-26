var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');
var Game = require('../src/Game.js');
var King = require('../src/Piece/King.js');
var PositionAlreadyTakenError = require('../src/Error/PositionAlreadyTakenError');

describe('Game', function () {
    var board = new Board('H', 8);
    var game = new Game(board);
    describe('#addPiece', function () {
        it('should return true if there is no piece on position', function () {
            assert.strictEqual(true, game.addPiece(new Position('C', 3), new King()));
        });

        it('should throw an error if there is already a piece at the position', function () {
            assert.strictEqual(true, game.addPiece(new Position('D', 4), new King()));
            assert.throws(
                function(){
                    game.addPiece(new Position('D', 4), new King())
                },
                function(error) {
                    if ((error instanceof PositionAlreadyTakenError) && error.position.toString() === 'D,4') {
                        return true;
                    }
                }
            );
        });
    });
});