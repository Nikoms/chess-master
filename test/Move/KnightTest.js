var Knight = require('../../src/Move/Knight.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Knight', function () {

    describe('#getPossibleMoves', function () {
        it('The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally.', function () {

            var moveRepresentation = [
                '##X#X#',
                '#X###X',
                '###0##',
                '#X###X',
                '##X#X#'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var knight = new Knight(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(knight.getPossibleMoves(game));

        });

        it('In the corner, the knight can only go in 2 square', function () {

            var moveRepresentation = [
                '#X#',
                '##X',
                '0##'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var knight = new Knight(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(knight.getPossibleMoves(game));

        });
    });
});
