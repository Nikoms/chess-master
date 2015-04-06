var King = require('../../src/Move/King.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('King', function () {
    describe('#getPossibleMoves', function () {
        it('The king can go one step around', function () {

            var moveRepresentation = [
            '#####',
            '#XXX#',
            '#X0X#',
            '#XXX#',
            '#####'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var king = new King(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(king.getPossibleMoves(game));

        });

        it('The king in a corner of a board can only go in 3 directions', function () {

            var moveRepresentation = [
                '#####',
                '#####',
                'XX###',
                '0X###'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var king = new King(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(king.getPossibleMoves(game));

        });

        it('The king in an another corner of a board can only go in 3 directions', function () {

            var moveRepresentation = [
                '###X0',
                '###XX',
                '#####',
                '#####'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var king = new King(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(king.getPossibleMoves(game));

        });

        it('The king in the middle right of a board can only go in 5 directions', function () {

            var moveRepresentation = [
                '#####',
                '###XX',
                '###X0',
                '###XX',
                '#####'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var king = new King(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(king.getPossibleMoves(game));
        });
    });
});
