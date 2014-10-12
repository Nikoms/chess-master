function Board(name, size) {
    this.name = name;
    this.size = size;
}
Board.prototype.getName = function () {
    return this.name;
};

Board.prototype.getHeight = function () {
    return this.size[1];
};


Board.prototype.getWidth = function () {
    return this.size[1];
};

module.exports = Board;