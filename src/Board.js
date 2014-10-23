function Board(size) {
    this.size = size;
}

Board.prototype.getHeight = function () {
    return this.size[1];
};

Board.prototype.getWidth = function () {
    return this.size[0];
};

module.exports = Board;