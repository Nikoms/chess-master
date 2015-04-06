var Pawn = require('../../src/Move/Pawn.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Pawn', function () {

    describe('#getPossibleMoves', function () {
        it('The pawn can go one step around', function () {
            var moveRepresentation = [
                '#####',
                '##X##',
                '##0##',
                '#####',
                '#####'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var pawn = new Pawn(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(pawn.getPossibleMoves(game));
        });
        it('The pawn in a corner of a board can only go in 1 direction', function () {

            var moveRepresentation = [
                '###',
                'X##',
                '0##'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var pawn = new Pawn(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(pawn.getPossibleMoves(game));
        });

        it('The pawn in a top position cant go anywhere', function () {
            var moveRepresentation = [
                '0##',
                '###'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var pawn = new Pawn(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(pawn.getPossibleMoves(game));
        });
    });
});
