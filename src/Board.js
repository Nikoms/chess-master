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

Board.prototype.getWidthToInt = function () {
    return 1 + this.width.charCodeAt(0) - 'A'.charCodeAt(0);
}


Board.prototype.getSize = function () {
    return this.getWidthToInt() * this.height;
};

module.exports = Board;