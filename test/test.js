var assert = require("assert");
var Board = require('../src/Board.js');

describe('Board', function () {
    var board = new Board('Chess', [8, 8]);
    describe('#getName', function () {
        it('should return Chess', function () {
            assert.strictEqual('Chess', board.getName());
        })
    });
    describe('#getHeight', function () {
        it('should return 8', function () {
            assert.strictEqual('8', board.getHeight());
        })
    });
    describe('#getWidth', function () {
        it('should return 8', function () {
            assert.strictEqual('8', board.getWidth());
        })
    });
});