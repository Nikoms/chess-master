var util = require('util');

function ImpossiblePositionError(x, y) {
    this.message = 'The position [' + x + ',' + y + '] is not valid';
}

util.inherits(ImpossiblePositionError, Error);

module.exports = ImpossiblePositionError;