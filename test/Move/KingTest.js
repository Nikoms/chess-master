var King = require('../../src/Move/King.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('King', function () {
    var king = new King();
    describe('#getPossibleMoves', function () {
        it('The king can go one step around', function () {

            var moveRepresentation = [
            '#####',
            '#XXX#',
            '#X0X#',
            '#XXX#',
            '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(king);
        });

        it('The king in a corner of a board can only go in 3 directions', function () {

            var moveRepresentation = [
                '#####',
                '#####',
                'XX###',
                '0X###'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(king);
        });

        it('The king in an another corner of a board can only go in 3 directions', function () {

            var moveRepresentation = [
                '###X0',
                '###XX',
                '#####',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(king);
        });

        it('The king in the middle right of a board can only go in 5 directions', function () {

            var moveRepresentation = [
                '#####',
                '###XX',
                '###X0',
                '###XX',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(king);
        });

        it('The king is blocked by other pieces while moving', function () {

            var moveRepresentation = [
                '#####',
                '#XXW#',
                '#X0W#',
                '#WWX#',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(king);
        });
    });
});
