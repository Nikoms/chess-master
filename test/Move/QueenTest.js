var assert = require("assert");
var Queen = require('../../src/Move/Queen.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Queen', function () {
    var game = new Game(new Board(7,7));

    //4 X#X#X
    //3 #XXX#
    //2 XX0XX
    //1 #XXX#
    //0 X#X#X
    //  01234

    describe('#getPossibleMoves', function () {
        it('The queen has bishop and rook moves.', function () {
            var queen = new Queen(new Position(2,2));
            assert.deepEqual([
                //LEFT BOTTOM
                new Position(1,1),
                new Position(0,0),

                ////LEFT TOP
                new Position(1,3),
                new Position(0,4),

                //RIGHT BOTTOM
                new Position(3,1),
                new Position(4,0),

                //RIGHT TOP
                new Position(3,3),
                new Position(4,4),
                new Position(5,5),
                new Position(6,6),
                new Position(7,7),

                //LEFT
                new Position(1,2),
                new Position(0,2),

                //RIGHT
                new Position(3,2),
                new Position(4,2),
                new Position(5,2),
                new Position(6,2),
                new Position(7,2),

                //BOTTOM
                new Position(2,1),
                new Position(2,0),

                //TOP
                new Position(2,3),
                new Position(2,4),
                new Position(2,5),
                new Position(2,6),
                new Position(2,7)
            ],queen.getPossibleMoves(game));
        });

        it('In the corner, the queen has bishop and rook moves.', function () {
            var bishop = new Queen(new Position(0,0));
            assert.deepEqual([
                //like bishop
                new Position(1, 1),
                new Position(2, 2),
                new Position(3, 3),
                new Position(4, 4),
                new Position(5, 5),
                new Position(6, 6),
                new Position(7, 7),

                //like rook - horizontal
                new Position(1, 0),
                new Position(2, 0),
                new Position(3, 0),
                new Position(4, 0),
                new Position(5, 0),
                new Position(6, 0),
                new Position(7, 0),


                //like rook - vertical
                new Position(0, 1),
                new Position(0, 2),
                new Position(0, 3),
                new Position(0, 4),
                new Position(0, 5),
                new Position(0, 6),
                new Position(0, 7)
            ],bishop.getPossibleMoves(game));
        });

    });
});
