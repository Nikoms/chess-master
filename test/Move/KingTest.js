var assert = require("assert");
var King = require('../../src/Move/King.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('King', function () {
    var game = new Game(new Board('H', 8));

    //5 #####
    //4 #XXX#
    //3 #X0X#
    //2 #XXX#
    //1 #####
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The king can go one step around', function () {
            var middleKing = new King(new Position('C', 3));
            assert.deepEqual([
                new Position('B', 2),
                new Position('C', 2),
                new Position('D', 2),

                new Position('B', 3),
                new Position('D', 3),

                new Position('B', 4),
                new Position('C', 4),
                new Position('D', 4)
            ],middleKing.getPossibleMoves(game));
        });
        it('The king in a corner of a board can only go in 3 directions', function () {
            var cornerBottomLeftKing = new King(new Position('A', 1));
            assert.deepEqual([
                new Position('B', 1),
                new Position('A', 2),
                new Position('B', 2)
            ],cornerBottomLeftKing.getPossibleMoves(game));
        });
        it('The king in an another corner of a board can only go in 3 directions', function () {
            var cornerTopRightKing = new King(new Position('H', 8));
            assert.deepEqual([
                new Position('G', 7),
                new Position('H', 7),
                new Position('G', 8)
            ],cornerTopRightKing.getPossibleMoves(game));
        });


        it('The king in the middle right of a board can only go in 5 directions', function () {
            var middleRightKing = new King(new Position('H', 4));
            assert.deepEqual([
                new Position('G', 3),
                new Position('H', 3),

                new Position('G', 4),

                new Position('G', 5),
                new Position('H', 5)
            ],middleRightKing.getPossibleMoves(game));
        });
    });
});
