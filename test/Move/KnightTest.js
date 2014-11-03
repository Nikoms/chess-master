var assert = require("assert");
var Knight = require('../../src/Move/Knight.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Knight', function () {
    var game = new Game(new Board('H', 8));

    //5 ##X#X#
    //4 #X###X
    //3 ###0##
    //2 #X###X
    //1 ##X#X#
    //  ABCDEF

    describe('#getPossibleMoves', function () {
        it('The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally.', function () {
            var knight = new Knight(new Position('D', 3));
            assert.deepEqual([
                //Bottom left
                new Position('B', 2),
                new Position('C', 1),

                //Bottom right
                new Position('F', 2),
                new Position('E', 1),

                //Top left
                new Position('C', 5),
                new Position('B', 4),

                //Top right
                new Position('E', 5),
                new Position('F', 4)
            ],knight.getPossibleMoves(game));
        });

        it('In the corner, the knight can only go in 2 square', function () {
            var knight = new Knight(new Position('A', 1));
            assert.deepEqual([
                new Position('B', 3),
                new Position('C', 2)
            ],knight.getPossibleMoves(game));
        });
    });
});
