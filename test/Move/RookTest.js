var assert = require("assert");
var Rook = require('../../src/Move/Rook.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Rook', function () {
    var game = new Game(new Board('H', 8));

    //5 ##X##
    //4 ##X##
    //3 XX0XX
    //2 ##X##
    //1 ##X##
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The rook moves horizontally or vertically', function () {
            var rook = new Rook(new Position('C', 3));
            assert.deepEqual([
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

            ],rook.getPossibleMoves(game));
        });
    });
});
