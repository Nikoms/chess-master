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


Board.prototype.getSize = function () {
    //TODO: Maybe ask this to position? Or do we need this?
    return this.width * this.height;
};

Board.prototype.isPositionValid = function (position) {
    //TODO: Make a position:isBetween method
    return position.getX() <= this.width
        && position.getY() <= this.height
        && position.getX() >= 1
        && position.getY() >= 1;
};

module.exports = Board;