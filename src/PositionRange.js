function PositionRange(startPosition, stopPosition) {
    this.startPosition = startPosition;
    this.stopPosition = stopPosition;
}

PositionRange.prototype.isPositionValid = function (position) {
    return position.getX() <= this.stopPosition.getX()
        && position.getY() <= this.stopPosition.getY()
        && position.getX() >= this.startPosition.getX()
        && position.getY() >= this.startPosition.getY();
};

module.exports = PositionRange;