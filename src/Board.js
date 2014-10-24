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

module.exports = Board;