var Knight = require('../../src/Move/Knight.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Knight', function () {
    var knight = new Knight();

    describe('#getPossibleMoves', function () {
        it('The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally.', function () {

            var moveRepresentation = [
                '##X#X#',
                '#X###X',
                '###0##',
                '#X###X',
                '##X#X#'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(knight);
        });

        it('In the corner, the knight can only go in 2 square', function () {

            var moveRepresentation = [
                '#X#',
                '##X',
                '0##'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(knight);

        });

        it('The knight can jump over a piece (this test is not optional).', function () {

            var moveRepresentation = [
                '##X#X#',
                '#XPPPX',
                '##P0P#',
                '#XPPPX',
                '##X#X#'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(knight);
        });
    });
});
