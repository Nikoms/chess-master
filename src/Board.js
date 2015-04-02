function Board(width, height) {
    this.width = width;
    this.height = height;
}

Board.prototype.getHeight = function () {
    return this.height;
};

Board.prototype.getWidth = function () {
    return this.width;
};

Board.prototype.isPositionValid = function (position) {
    //TODO: Make a position:isBetween method
    return position.getX() <= this.width
        && position.getY() <= this.height
        && position.getX() >= 0
        && position.getY() >= 0;
};

module.exports = Board;