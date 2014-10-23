var assert = require("assert");
var Board = require('../src/Board.js');

describe('Board', function () {
    var board = new Board(['H', 8]);
    describe('#getHeight', function () {
        it('should return 8', function () {
            assert.strictEqual(8, board.getHeight());
        })
    });
    describe('#getWidth', function () {
        it('should return H', function () {
            assert.strictEqual('H', board.getWidth());
        })
    });
});