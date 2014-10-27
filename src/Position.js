var ImpossiblePositionError = require('./Error/ImpossiblePositionError.js');

function Position(x, y) {
    if(
        'A'.charCodeAt(0) > x.charCodeAt(0)
        || 'Z'.charCodeAt(0) < x.charCodeAt(0)

    ){
        throw new ImpossiblePositionError(x,y);
    }


    this.x = x;
    this.y = y;
}

Position.prototype.getX = function () {
    return this.x;
};

Position.prototype.getY = function () {
    return this.y;
};

Position.prototype.toString = function () {
    return this.x + ',' + this.y;
};

Position.prototype.addX = function (addend) {
    var newXCharCode = this.x.charCodeAt(0) + addend;
    var newX = String.fromCharCode(newXCharCode);
    return new Position(newX, this.y);

};

module.exports = Position;