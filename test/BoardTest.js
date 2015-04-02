var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');

describe('Board', function () {
    var board = new Board(7,7);
    describe('#getHeight', function () {
        it('should return 7', function () {
            assert.strictEqual(7, board.getHeight());
        })
    });
    describe('#getWidth', function () {
        it('should return 7', function () {
            assert.strictEqual(7, board.getWidth());
        })
    });
    describe('#isPositionValid', function () {
        it('should return true if it s in the board', function () {
            assert.strictEqual(true, board.isPositionValid(new Position(1, 1)),'1');
            assert.strictEqual(true, board.isPositionValid(new Position(3, 3)),'2');
            assert.strictEqual(true, board.isPositionValid(new Position(1, 0)),'3');
            assert.strictEqual(true, board.isPositionValid(new Position(7, 7)),'4');
            assert.strictEqual(false, board.isPositionValid(new Position(8, 8)),'5');
            assert.strictEqual(false, board.isPositionValid(new Position(9, 1)),'6');
            assert.strictEqual(false, board.isPositionValid(new Position(1, 9)),'7');
        })
    });
});