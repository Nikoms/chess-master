var assert = require("assert");
var King = require('../../src/Move/King.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('King', function () {
    var game = new Game(new Board(8, 8));

    //5 #####
    //4 #XXX#
    //3 #X0X#
    //2 #XXX#
    //1 #####
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The king can go one step around', function () {
            var middleKing = new King(new Position(3, 3));
            assert.deepEqual([
                new Position(2, 2),
                new Position(3, 2),
                new Position(4, 2),

                new Position(2, 3),
                new Position(4, 3),

                new Position(2, 4),
                new Position(3, 4),
                new Position(4, 4)
            ],middleKing.getPossibleMoves(game));
        });
        it('The king in a corner of a board can only go in 3 directions', function () {
            var cornerBottomLeftKing = new King(new Position(1, 1));
            assert.deepEqual([
                new Position(2, 1),
                new Position(1, 2),
                new Position(2, 2)
            ],cornerBottomLeftKing.getPossibleMoves(game));
        });
        it('The king in an another corner of a board can only go in 3 directions', function () {
            var cornerTopRightKing = new King(new Position(8, 8));
            assert.deepEqual([
                new Position(7, 7),
                new Position(8, 7),
                new Position(7, 8)
            ],cornerTopRightKing.getPossibleMoves(game));
        });


        it('The king in the middle right of a board can only go in 5 directions', function () {
            var middleRightKing = new King(new Position(8, 4));
            assert.deepEqual([
                new Position(7, 3),
                new Position(8, 3),

                new Position(7, 4),

                new Position(7, 5),
                new Position(8, 5)
            ],middleRightKing.getPossibleMoves(game));
        });
    });
});
