var assert = require("assert");
var Board = require('../src/Board.js');

describe('Board', function () {
    var board = new Board('H', 8);
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
    describe('#getWidthToInt', function () {
        it('should return 8 (because H = 8)', function () {
            assert.strictEqual(8, board.getWidthToInt());
        })
    });
    describe('#getSize', function () {
        it('should return 8XH = 64', function () {
            assert.strictEqual(64, board.getSize());
        })
    });
});