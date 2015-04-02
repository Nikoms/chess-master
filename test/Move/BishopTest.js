var assert = require("assert");
var Bishop = require('../../src/Move/Bishop.js');
var Position = require('../../src/Position.js');
var PositionRange = require('../../src/PositionRange.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Bishop', function () {
    var game = new Game(new Board(new PositionRange(new Position(0,0), new Position(7,7))));

    //4 X###X
    //3 #X#X#
    //2 ##0##
    //1 #X#X#
    //0 X###X
    //  01234

    describe('#getPossibleMoves', function () {
        it('The bishop has no restrictions in distance for each move, but is limited to diagonal movement', function () {
            var bishop = new Bishop(new Position(2,2));
            assert.deepEqual([
                //LEFT BOTTOM
                new Position(1, 1),
                new Position(0, 0),

                ////LEFT TOP
                new Position(1, 3),
                new Position(0, 4),

                //RIGHT BOTTOM
                new Position(3, 1),
                new Position(4, 0),

                //RIGHT TOP
                new Position(3, 3),
                new Position(4, 4),
                new Position(5, 5),
                new Position(6, 6),
                new Position(7, 7)
            ],bishop.getPossibleMoves(game), bishop.getPossibleMoves(game));
        });

        it('In the corner, the bishop can only go in one direction', function () {
            var bishop = new Bishop(new Position(0,0));
            assert.deepEqual([
                new Position(1,1),
                new Position(2,2),
                new Position(3,3),
                new Position(4,4),
                new Position(5,5),
                new Position(6,6),
                new Position(7,7)
            ],bishop.getPossibleMoves(game));
        });

    });
});
