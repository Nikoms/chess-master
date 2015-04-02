var assert = require("assert");
var Board = require('../src/Board.js');
var Position = require('../src/Position.js');
var PositionRange = require('../src/PositionRange.js');

describe('Board', function () {
    var board = new Board(new PositionRange(new Position(0,0), new Position(7,7)));

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