var Pawn = require('../../src/Move/Pawn.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Pawn', function () {
    var pawn = new Pawn();

    describe('#getPossibleMoves', function () {
        it('The pawn can go one step around', function () {
            var moveRepresentation = [
                '#####',
                '##X##',
                '##0##',
                '#####',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(pawn);
        });
        it('The pawn in a corner of a board can only go in 1 direction', function () {

            var moveRepresentation = [
                '###',
                'X##',
                '0##'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(pawn);
        });

        it('The pawn in a top position cant go anywhere', function () {
            var moveRepresentation = [
                '0##',
                '###'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(pawn);
        });
        it('The pawn is blocked by other pieces', function () {
            var moveRepresentation = [
                '#####',
                '##W##',
                '##0##',
                '#####',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(pawn);
        });
    });
});
