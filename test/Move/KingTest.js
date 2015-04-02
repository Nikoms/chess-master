var assert = require("assert");
var King = require('../../src/Move/King.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('King', function () {
    var game = new Game(new Board(7,7));

    //4 #####
    //3 #XXX#
    //2 #X0X#
    //1 #XXX#
    //0 #####
    //  01234...

    describe('#getPossibleMoves', function () {
        it('The king can go one step around', function () {
            var middleKing = new King(new Position(2,2));
            assert.deepEqual([
                new Position(1,1),
                new Position(2,1),
                new Position(3,1),

                new Position(1,2),
                new Position(3,2),

                new Position(1,3),
                new Position(2,3),
                new Position(3,3)
            ],middleKing.getPossibleMoves(game));
        });
        it('The king in a corner of a board can only go in 3 directions', function () {
            var cornerBottomLeftKing = new King(new Position(0,0));
            assert.deepEqual([
                new Position(1,0),
                new Position(0,1),
                new Position(1,1)
            ],cornerBottomLeftKing.getPossibleMoves(game));
        });
        it('The king in an another corner of a board can only go in 3 directions', function () {
            var cornerTopRightKing = new King(new Position(7,7));
            assert.deepEqual([
                new Position(6,6),
                new Position(7,6),
                new Position(6,7)
            ],cornerTopRightKing.getPossibleMoves(game));
        });


        it('The king in the middle right of a board can only go in 5 directions', function () {
            var middleRightKing = new King(new Position(7,3));
            assert.deepEqual([
                new Position(6,2),
                new Position(7,2),

                new Position(6,3),

                new Position(6,4),
                new Position(7,4)
            ],middleRightKing.getPossibleMoves(game));
        });
    });
});
