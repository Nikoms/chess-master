var Rook = require('../../src/Move/Rook.js');
var BoardMoveTester = require('../BoardMoveTester.js');
var Piece = require('../../src/Piece');

describe('Rook', function () {
    var rook = new Rook(Piece.WHITE);
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

        it('The rook is blocked by pieces with same color', function () {
            var moveRepresentation = [
                '##X##',
                '##X##',
                '#W0XW',
                '##W##',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(rook);
        });

        it('The rook can take a piece with a different color', function () {
            var moveRepresentation = [
                '##X##',
                '##X##',
                '#B0XB',
                '##B##',
                '#####'];
            new BoardMoveTester(moveRepresentation).assertPossibleMoves(rook);
        });
    });
});
