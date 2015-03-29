var assert = require("assert");
var Queen = require('../../src/Move/Queen.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Queen', function () {
    var game = new Game(new Board(8, 8));

    //5 X#X#X
    //4 #XXX#
    //3 XX0XX
    //2 #XXX#
    //1 X#X#X
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The queen has bishop and rook moves.', function () {
            var queen = new Queen(new Position(3, 3));
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
                new Position(8, 8),

                //LEFT
                new Position(2, 3),
                new Position(1, 3),

                //RIGHT
                new Position(4, 3),
                new Position(5, 3),
                new Position(6, 3),
                new Position(7, 3),
                new Position(8, 3),

                //BOTTOM
                new Position(3, 2),
                new Position(3, 1),

                //TOP
                new Position(3, 4),
                new Position(3, 5),
                new Position(3, 6),
                new Position(3, 7),
                new Position(3, 8)
            ],queen.getPossibleMoves(game));
        });

        it('In the corner, the queen has bishop and rook moves.', function () {
            var bishop = new Queen(new Position(1, 1));
            assert.deepEqual([
                //like bishop
                new Position(2, 2),
                new Position(3, 3),
                new Position(4, 4),
                new Position(5, 5),
                new Position(6, 6),
                new Position(7, 7),
                new Position(8, 8),

                //like rook - horizontal
                new Position(2, 1),
                new Position(3, 1),
                new Position(4, 1),
                new Position(5, 1),
                new Position(6, 1),
                new Position(7, 1),
                new Position(8, 1),


                //like rook - vertical
                new Position(1, 2),
                new Position(1, 3),
                new Position(1, 4),
                new Position(1, 5),
                new Position(1, 6),
                new Position(1, 7),
                new Position(1, 8)
            ],bishop.getPossibleMoves(game));
        });

    });
});
