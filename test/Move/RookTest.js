var assert = require("assert");
var Rook = require('../../src/Move/Rook.js');
var Position = require('../../src/Position.js');
var PositionRange = require('../../src/PositionRange.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Rook', function () {
    var game = new Game(new Board(new PositionRange(new Position(0,0), new Position(7,7))));

    //4 ##X##
    //3 ##X##
    //2 XX0XX
    //1 ##X##
    //0 ##X##
    //  01234

    describe('#getPossibleMoves', function () {
        it('The rook moves horizontally or vertically', function () {
            var rook = new Rook(new Position(2,2));
            assert.deepEqual([
                //LEFT
                new Position(1,2),
                new Position(0,2),

                //RIGHT
                new Position(3, 2),
                new Position(4, 2),
                new Position(5, 2),
                new Position(6, 2),
                new Position(7, 2),

                //BOTTOM
                new Position(2,1),
                new Position(2,0),

                //TOP,
                new Position(2, 3),
                new Position(2, 4),
                new Position(2, 5),
                new Position(2, 6),
                new Position(2, 7)

            ],rook.getPossibleMoves(game));
        });
    });
});
