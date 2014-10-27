var ImpossiblePositionError = require('./Error/ImpossiblePositionError.js');

function betweenAZ(x){
    return 'A'.charCodeAt(0) <= x.charCodeAt(0) && 'Z'.charCodeAt(0) >= x.charCodeAt(0);
}

function Position(x, y) {
    if(!betweenAZ(x) || y < 1){
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

Position.prototype.addY = function (addend) {
    return new Position(this.x, this.y + addend);
};

module.exports = Position;