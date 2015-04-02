function Board(positionRange) {
    this.positionRange = positionRange;
}

Board.prototype.isPositionValid = function (position) {
    //TODO: make it in PositionRange
    return position.getX() <= this.positionRange.getStopPosition().getX()
        && position.getY() <= this.positionRange.getStopPosition().getY()
        && position.getX() >= 0
        && position.getY() >= 0;
};

module.exports = Board;