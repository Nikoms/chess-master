var assert = require("assert");
var Bishop = require('../../src/Move/Bishop.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Bishop', function () {
    var game = new Game(new Board(8, 8));

    //5 X###X
    //4 #X#X#
    //3 ##0##
    //2 #X#X#
    //1 X###X
    //  12345

    describe('#getPossibleMoves', function () {
        it('The bishop has no restrictions in distance for each move, but is limited to diagonal movement', function () {
            var bishop = new Bishop(new Position(3, 3));
            assert.deepEqual([
                //LEFT BOTTOM
                new Position(2, 2),
                new Position(1, 1),

                ////LEFT TOP
                new Position(2, 4),
                new Position(1, 5),

                //RIGHT BOTTOM
                new Position(4, 2),
                new Position(5, 1),

                //RIGHT TOP
                new Position(4, 4),
                new Position(5, 5),
                new Position(6, 6),
                new Position(7, 7),
                new Position(8, 8)
            ],bishop.getPossibleMoves(game));
        });

        it('In the corner, the bishop can only go in one direction', function () {
            var bishop = new Bishop(new Position(1, 1));
            assert.deepEqual([
                new Position(2, 2),
                new Position(3, 3),
                new Position(4, 4),
                new Position(5, 5),
                new Position(6, 6),
                new Position(7, 7),
                new Position(8, 8)
            ],bishop.getPossibleMoves(game));
        });

    });
});
