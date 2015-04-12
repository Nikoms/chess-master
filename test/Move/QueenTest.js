var Queen = require('../../src/Move/Queen.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Queen', function () {
    var queen = new Queen();

    describe('#getPossibleMoves', function () {
        it('The queen has bishop and rook moves.', function () {

            var moveRepresentation = [
                'X#X#X',
                '#XXX#',
                'XX0XX',
                '#XXX#',
                'X#X#X'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(queen);
        });

        it('In the corner, the queen has bishop and rook moves.', function () {
            var moveRepresentation = [
                'X###X',
                'X##X#',
                'X#X##',
                'XX###',
                '0XXXX'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(queen);
        });

        it('The queen is blocked by other pieces.', function () {

            var moveRepresentation = [
                'X###X',
                '#XPX#',
                'XX0P#',
                '#XXX#',
                'X#X#P'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(queen);
        });

    });
});
