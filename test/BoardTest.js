var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');

describe('Board', function () {
    var board = new Board(8, 8);
    describe('#getHeight', function () {
        it('should return 8', function () {
            assert.strictEqual(8, board.getHeight());
        })
    });
    describe('#getWidth', function () {
        it('should return H', function () {
            assert.strictEqual(8, board.getWidth());
        })
    });
    describe('#getSize', function () {
        it('should return 8XH = 64', function () {
            assert.strictEqual(64, board.getSize());
        })
    });
    describe('#isPositionValid', function () {
        it('should return true if it s in the board', function () {
            assert.strictEqual(true, board.isPositionValid(new Position(1, 1)));
            assert.strictEqual(true, board.isPositionValid(new Position(3, 3)));
            assert.strictEqual(true, board.isPositionValid(new Position(8, 8)));
            assert.strictEqual(false, board.isPositionValid(new Position(9, 1)));
            assert.strictEqual(false, board.isPositionValid(new Position(1, 9)));
            assert.strictEqual(false, board.isPositionValid(new Position(1, 0)));
        })
    });
});