function Position(x, y) {
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
    return new Position(this.x + addend, this.y);
};

Position.prototype.addY = function (addend) {
    return new Position(this.x, this.y + addend);
};

module.exports = Position;