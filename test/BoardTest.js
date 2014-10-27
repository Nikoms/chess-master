var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');

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
    describe('#isPositionValid', function () {
        it('should return true if it s in the board', function () {
            assert.strictEqual(true, board.isPositionValid(new Position('A', 1)));
            assert.strictEqual(false, board.isPositionValid(new Position('I', 1)));
            assert.strictEqual(false, board.isPositionValid(new Position('A', 9)));
        })
    });
});