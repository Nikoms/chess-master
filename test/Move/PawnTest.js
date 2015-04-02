var assert = require("assert");
var Pawn = require('../../src/Move/Pawn.js');
var Position = require('../../src/Position.js');
var PositionRange = require('../../src/PositionRange.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Pawn', function () {
    var game = new Game(new Board(new PositionRange(new Position(0,0), new Position(7,7))));

    //4 #####
    //3 ##X##
    //2 ##0##
    //1 #####
    //0 #####
    //  01234

    describe('#getPossibleMoves', function () {
        it('The pawn can go one step around', function () {
            var middlePawn = new Pawn(new Position(2,2));
            assert.deepEqual([
                new Position(2,3)
            ],middlePawn.getPossibleMoves(game));
        });
        it('The pawn in a corner of a board can only go in 3 directions', function () {
            var cornerBottomLeftPawn = new Pawn(new Position(0,0));
            assert.deepEqual([
                new Position(0,1)
            ],cornerBottomLeftPawn.getPossibleMoves(game));
        });
        it('The pawn in an another corner of a board can only go in 3 directions', function () {
            var cornerTopRightPawn = new Pawn(new Position(7,7));
            assert.deepEqual([],cornerTopRightPawn.getPossibleMoves(game));
        });
    });
});
