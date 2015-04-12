var Bishop = require('../../src/Move/Bishop.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Bishop', function () {
    var bishop = new Bishop();

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
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(bishop);
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
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(bishop);
        });

        it('The bishop is blocked by other pieces while moving', function () {
            var moveRepresentation = [
                '########',
                '######P#',
                '#####X##',
                'X###X###',
                '#X#X####',
                '##0#####',
                '#X#P####',
                'P#######'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(bishop);
        });

    });
});
