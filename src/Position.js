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

module.exports = Position;