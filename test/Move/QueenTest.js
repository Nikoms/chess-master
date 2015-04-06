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
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            boardMoveTester.assertPossibleMoves(queen.getPossibleMoves(game, boardMoveTester.getMasterPiecePosition()));

        });

        it('In the corner, the queen has bishop and rook moves.', function () {
            var moveRepresentation = [
                'X###X',
                'X##X#',
                'X#X##',
                'XX###',
                '0XXXX'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            boardMoveTester.assertPossibleMoves(queen.getPossibleMoves(game, boardMoveTester.getMasterPiecePosition()));

        });

    });
});
