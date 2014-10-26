var util = require('util');

function PositionAlreadyTakenError(position) {
    this.position = position;
    this.message = 'A piece already exists at position ' + position;
}

util.inherits(PositionAlreadyTakenError, Error);

module.exports = PositionAlreadyTakenError;