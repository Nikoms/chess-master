var assert = require("assert");
var Queen = require('../../src/Move/Queen.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Queen', function () {
    var game = new Game(new Board('H', 8));

    //5 X#X#X
    //4 #XXX#
    //3 XX0XX
    //2 #XXX#
    //1 X#X#X
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The queen has bishop and rook moves.', function () {
            var queen = new Queen(new Position('C', 3));
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
                new Position('H', 8),

                //LEFT
                new Position('B', 3),
                new Position('A', 3),

                //RIGHT
                new Position('D', 3),
                new Position('E', 3),
                new Position('F', 3),
                new Position('G', 3),
                new Position('H', 3),

                //BOTTOM
                new Position('C', 2),
                new Position('C', 1),

                //TOP
                new Position('C', 4),
                new Position('C', 5),
                new Position('C', 6),
                new Position('C', 7),
                new Position('C', 8)
            ],queen.getPossibleMoves(game));
        });

        it('In the corner, the queen has bishop and rook moves.', function () {
            var bishop = new Queen(new Position('A', 1));
            assert.deepEqual([
                //like bishop
                new Position('B', 2),
                new Position('C', 3),
                new Position('D', 4),
                new Position('E', 5),
                new Position('F', 6),
                new Position('G', 7),
                new Position('H', 8),

                //like rook - horizontal
                new Position('B', 1),
                new Position('C', 1),
                new Position('D', 1),
                new Position('E', 1),
                new Position('F', 1),
                new Position('G', 1),
                new Position('H', 1),


                //like rook - vertical
                new Position('A', 2),
                new Position('A', 3),
                new Position('A', 4),
                new Position('A', 5),
                new Position('A', 6),
                new Position('A', 7),
                new Position('A', 8)
            ],bishop.getPossibleMoves(game));
        });

    });
});
