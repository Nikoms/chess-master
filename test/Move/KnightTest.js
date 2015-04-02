var assert = require("assert");
var Knight = require('../../src/Move/Knight.js');
var Position = require('../../src/Position.js');
var PositionRange = require('../../src/PositionRange.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Knight', function () {
    var game = new Game(new Board(new PositionRange(new Position(0,0), new Position(7,7))));

    //4 ##X#X#
    //3 #X###X
    //2 ###0##
    //1 #X###X
    //0 ##X#X#
    //  012345

    describe('#getPossibleMoves', function () {
        it('The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally.', function () {
            var knight = new Knight(new Position(3,2));
            assert.deepEqual([
                //Bottom left
                new Position(1,1),
                new Position(2,0),

                //Bottom right
                new Position(5,1),
                new Position(4,0),

                //Top left
                new Position(2,4),
                new Position(1,3),

                //Top right
                new Position(4,4),
                new Position(5,3)
            ],knight.getPossibleMoves(game));
        });

        it('In the corner, the knight can only go in 2 square', function () {
            var knight = new Knight(new Position(0,0));
            assert.deepEqual([
                new Position(1,2),
                new Position(2,1)
            ],knight.getPossibleMoves(game));
        });
    });
});
