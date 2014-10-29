var assert = require("assert");
var Position = require('../src/Position.js');
var ImpossiblePositionError = require('../src/Error/ImpossiblePositionError.js');

describe('Position', function () {
    var position = new Position('H', 8);
    describe('#getX', function () {
        it('should return H', function () {
            assert.strictEqual('H', position.getX());
        })
    });

    describe('#getY', function () {
        it('should return 8', function () {
            assert.strictEqual(8, position.getY());
        })
    });

    describe('#toString', function () {
        it('should return H,8', function () {
            assert.strictEqual('H,8', position.toString());
        })
    });

    describe('#addX', function () {
        it('Addition X with a int', function () {
            assert.strictEqual('I', position.addX(1).getX());
            assert.strictEqual('J', position.addX(2).getX());
            assert.strictEqual('G', position.addX(-1).getX());
        });
        it('should throw an exception when the letter before A but with a positive ASCII code', function () {
            assert.throws(function () {
                position.addX(-10);
            }, function (error) {
                return (error instanceof ImpossiblePositionError);
            });
        });
        it('should throw an exception when the charcode is "negative"', function () {
            assert.throws(function () {
                position.addX(-100);
            }, function (error) {
                return (error instanceof ImpossiblePositionError);
            });
        });
    });
    describe('#addY', function () {
        it('Addition Y', function () {
            assert.strictEqual(9, position.addY(1).getY());
            assert.strictEqual(10, position.addY(2).getY());
            assert.strictEqual(7, position.addY(-1).getY());
        });
        it('should throw an exception when Y is "negative"', function () {
            assert.throws(function () {
                position.addY(-100);
            }, function (error) {
                return (error instanceof ImpossiblePositionError);
            });
        });
    });
});