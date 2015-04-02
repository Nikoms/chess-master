function Board(positionRange) {
    this.positionRange = positionRange;
}

Board.prototype.isPositionValid = function (position) {
    return this.positionRange.isPositionValid(position);
};

module.exports = Board;