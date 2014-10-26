var util = require('util');

function InvalidPositionError(position) {
    this.position = position;
    this.message = 'The position [' + position + '] is not valid';
}

util.inherits(InvalidPositionError, Error);

module.exports = InvalidPositionError;