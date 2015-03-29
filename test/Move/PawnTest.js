var assert = require("assert");
var Pawn = require('../../src/Move/Pawn.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');

describe('Pawn', function () {
    var game = new Game(new Board(8, 8));

    //5 #####
    //4 ##X##
    //3 ##0##
    //2 #####
    //1 #####
    //  ABCDE

    describe('#getPossibleMoves', function () {
        it('The pawn can go one step around', function () {
            var middlePawn = new Pawn(new Position(3, 3));
            assert.deepEqual([
                new Position(3, 4)
            ],middlePawn.getPossibleMoves(game));
        });
        it('The pawn in a corner of a board can only go in 3 directions', function () {
            var cornerBottomLeftPawn = new Pawn(new Position(1, 1));
            assert.deepEqual([
                new Position(1, 2)
            ],cornerBottomLeftPawn.getPossibleMoves(game));
        });
        it('The pawn in an another corner of a board can only go in 3 directions', function () {
            var cornerTopRightPawn = new Pawn(new Position(8, 8));
            assert.deepEqual([],cornerTopRightPawn.getPossibleMoves(game));
        });
    });
});
