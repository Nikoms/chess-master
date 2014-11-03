var assert = require("assert");
var Bishop = require('../../src/Move/Bishop.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Bishop', function () {
    var game = new Game(new Board('H', 8));

    //5 X###X
    //4 #X#X#
    //3 ##0##
    //2 #X#X#
    //1 X###X
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The bishop has no restrictions in distance for each move, but is limited to diagonal movement', function () {
            var bishop = new Bishop(new Position('C', 3));
            assert.deepEqual([
                //LEFT BOTTOM
                new Position('B', 2),
                new Position('A', 1),

                ////LEFT TOP
                new Position('B', 4),
                new Position('A', 5),

                //RIGHT BOTTOM
                new Position('D', 2),
                new Position('E', 1),

                //RIGHT TOP
                new Position('D', 4),
                new Position('E', 5),
                new Position('F', 6),
                new Position('G', 7),
                new Position('H', 8)
            ],bishop.getPossibleMoves(game));
        });

        it('In the corner, the bishop can only go in one direction', function () {
            var bishop = new Bishop(new Position('A', 1));
            assert.deepEqual([
                new Position('B', 2),
                new Position('C', 3),
                new Position('D', 4),
                new Position('E', 5),
                new Position('F', 6),
                new Position('G', 7),
                new Position('H', 8)
            ],bishop.getPossibleMoves(game));
        });

    });
});
