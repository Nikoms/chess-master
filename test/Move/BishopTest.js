var Bishop = require('../../src/Move/Bishop.js');
var Position = require('../../src/Position.js');
var Board = require('../../src/Board.js');
var Game = require('../../src/Game.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Bishop', function () {

    describe('#getPossibleMoves', function () {
        it('The bishop has no restrictions in distance for each move, but is limited to diagonal movement', function () {
            var moveRepresentation = [
                '#######X',
                '######X#',
                '#####X##',
                'X###X###',
                '#X#X####',
                '##0#####',
                '#X#X####',
                'X###X###'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = new Game(new Board(boardMoveTester.getPositionRange()));

            var bishop = new Bishop(new Position(2, 2));
            boardMoveTester.assertPossibleMoves(bishop.getPossibleMoves(game));
        });

        it('In the corner, the bishop can only go in one direction', function () {
            var moveRepresentation = [
                '#######X',
                '######X#',
                '#####X##',
                '####X###',
                '###X####',
                '##X#####',
                '#X######',
                '0#######'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = new Game(new Board(boardMoveTester.getPositionRange()));

            var bishop = new Bishop(new Position(0, 0));
            boardMoveTester.assertPossibleMoves(bishop.getPossibleMoves(game));
        });

    });
});
