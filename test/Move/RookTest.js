var Rook = require('../../src/Move/Rook.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Rook', function () {
    var rook = new Rook();
    describe('#getPossibleMoves', function () {
        it('The rook moves horizontally or vertically', function () {
            var moveRepresentation = [
                '##X##',
                '##X##',
                'XX0XX',
                '##X##',
                '##X##'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(rook);
        });

        it('The rook is blocked by other pieces', function () {
            var moveRepresentation = [
                '##X##',
                '##X##',
                'xP0XP',
                '##P##',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(rook);
        });
    });
});
