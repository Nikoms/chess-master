var assert = require("assert");
var Position = require('../src/Position.js');

describe('Board', function () {
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

});