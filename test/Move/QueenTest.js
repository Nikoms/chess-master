var Queen = require('../../src/Move/Queen.js');
var BoardMoveTester = require('../BoardMoveTester.js');
var Piece = require('../../src/Piece');

describe('Queen', function () {
    var queen = new Queen(Piece.WHITE);

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

        it('The queen is blocked by other pieces with the same color.', function () {

            var moveRepresentation = [
                'X###X',
                '#XWX#',
                'XX0W#',
                '#XXX#',
                'X#X#W'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(queen);
        });

        it('The queen can take enemy\'s pieces.', function () {

            var moveRepresentation = [
                'X###X',
                '#XBX#',
                'XX0B#',
                '#XXX#',
                'X#X#B'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(queen);
        });

    });
});
