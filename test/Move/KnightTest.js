var assert = require("assert");
var Knight = require('../../src/Move/Knight.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Knight', function () {
    var game = new Game(new Board(8, 8));

    //5 ##X#X#
    //4 #X###X
    //3 ###0##
    //2 #X###X
    //1 ##X#X#
    //  ABCDEF

    describe('#getPossibleMoves', function () {
        it('The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally.', function () {
            var knight = new Knight(new Position(4, 3));
            assert.deepEqual([
                //Bottom left
                new Position(2, 2),
                new Position(3, 1),

                //Bottom right
                new Position(6, 2),
                new Position(5, 1),

                //Top left
                new Position(3, 5),
                new Position(2, 4),

                //Top right
                new Position(5, 5),
                new Position(6, 4)
            ],knight.getPossibleMoves(game));
        });

        it('In the corner, the knight can only go in 2 square', function () {
            var knight = new Knight(new Position(1, 1));
            assert.deepEqual([
                new Position(2, 3),
                new Position(3, 2)
            ],knight.getPossibleMoves(game));
        });
    });
});
