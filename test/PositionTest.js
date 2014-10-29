var assert = require("assert");
var Position = require('../src/Position.js');

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
            assert.strictEqual(62, position.addX(-10).getX().charCodeAt(0));
        });
        it('Substract X (as a letter) with a big int cause the ASII to be negative... And so back to the last ASCII character', function () {
            assert.strictEqual(65508, position.addX(-100).getX().charCodeAt(0));
        });
    });
    describe('#addY', function () {
        it('Addition Y', function () {
            assert.strictEqual(9, position.addY(1).getY());
            assert.strictEqual(10, position.addY(2).getY());
            assert.strictEqual(7, position.addY(-1).getY());
            assert.strictEqual(-92, position.addY(-100).getY());
        });
    });
});