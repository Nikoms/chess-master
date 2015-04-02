var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');
var PositionRange = require('../src/PositionRange.js');
var Game = require('../src/Game.js');
var Piece = require('../src/Piece');
var PositionAlreadyTakenError = require('../src/Error/PositionAlreadyTakenError');
var InvalidPositionError = require('../src/Error/InvalidPositionError');

describe('Game', function () {
    var board = new Board(new PositionRange(new Position(0,0), new Position(7,7)));
    var game = new Game(board);
    var piece = new Piece('King','White');
    describe('#addPiece', function () {
        it('should return true if there is no piece on position', function () {
            assert.strictEqual(game, game.addPiece(new Position(3, 3), piece));
        });

        it('should throw an error if there is already a piece at the position', function () {
            assert.strictEqual(game, game.addPiece(new Position(4, 4), piece));
            assert.throws(
                function(){
                    game.addPiece(new Position(4, 4), piece)
                },
                function(error) {
                    return (error instanceof PositionAlreadyTakenError) && error.position.toString() === '4,4';
                }
            );
        });
        it('should throw an error if the position is not valid', function () {
            assert.throws(
                function(){
                    game.addPiece(new Position(8, 1), piece)
                },
                function(error) {
                    return (error instanceof InvalidPositionError) && error.position.toString() === '8,1';
                }
            );
        });
    });
});