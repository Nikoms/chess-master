var assert = require("assert");
var Rook = require('../../src/Move/Rook.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Rook', function () {
    var game = new Game(new Board(8, 8));

    //5 ##X##
    //4 ##X##
    //3 XX0XX
    //2 ##X##
    //1 ##X##
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The rook moves horizontally or vertically', function () {
            var rook = new Rook(new Position(3, 3));
            assert.deepEqual([
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

            ],rook.getPossibleMoves(game));
        });
    });
});
