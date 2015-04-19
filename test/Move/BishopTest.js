var Bishop = require('../../src/Move/Bishop.js');
var BoardMoveTester = require('../BoardMoveTester.js');
var Piece = require('../../src/Piece');

describe('Bishop', function () {
    var bishop = new Bishop(Piece.WHITE);

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

        it('The bishop is stopped just before his "partners" pieces while moving', function () {
            var moveRepresentation = [
                '########',
                '######W#',
                '#####X##',
                'X###X###',
                '#X#X####',
                '##0#####',
                '#X#W####',
                'W#######'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(bishop);
        });

        it('The bishop can go to the same position as enemies (B means black piece and so a possible move)', function () {
            var moveRepresentation = [
                '########',
                '######B#',
                '#####X##',
                'X###X###',
                '#X#X####',
                '##0#####',
                '#X#B####',
                'B#######'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(bishop);
        });


    });
});
