var assert = require("assert");
var Position = require('../src/Position.js');

describe('Position', function () {
    var position = new Position(1, 1);
    describe('#getX', function () {
        it('should return 1', function () {
            assert.strictEqual(1, position.getX());
        })
    });

    describe('#getY', function () {
        it('should return 1', function () {
            assert.strictEqual(1, position.getY());
        })
    });

    describe('#toString', function () {
        it('should return 1,1', function () {
            assert.strictEqual('1,1', position.toString());
        })
    });

    describe('#addX', function () {
        it('Addition X with a int', function () {
            assert.strictEqual(2, position.addX(1).getX());
            assert.strictEqual(3, position.addX(2).getX());
            assert.strictEqual(0, position.addX(-1).getX());
            assert.strictEqual(-9, position.addX(-10).getX());
        });
    });
    describe('#addY', function () {
        it('Addition Y', function () {
            assert.strictEqual(2, position.addY(1).getY());
            assert.strictEqual(3, position.addY(2).getY());
            assert.strictEqual(0, position.addY(-1).getY());
            assert.strictEqual(-99, position.addY(-100).getY());
        });
    });
});