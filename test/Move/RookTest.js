var Rook = require('../../src/Move/Rook.js');
var BoardMoveTester = require('../BoardMoveTester.js');

describe('Rook', function () {
    describe('#getPossibleMoves', function () {
        it('The rook moves horizontally or vertically', function () {
            var moveRepresentation = [
                '##X##',
                '##X##',
                'XX0XX',
                '##X##',
                '##X##'];
            var boardMoveTester = new BoardMoveTester(moveRepresentation);
            var game = boardMoveTester.getGame();

            var rook = new Rook(boardMoveTester.getMasterPiecePosition());
            boardMoveTester.assertPossibleMoves(rook.getPossibleMoves(game));
        });
    });
});
