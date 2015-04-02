function PositionRange(startPosition, stopPosition) {
    this.startPosition = startPosition;
    this.stopPosition = stopPosition;
}

PositionRange.prototype.getStartPosition = function () {
    return this.startPosition;
};

PositionRange.prototype.getStopPosition = function () {
    return this.stopPosition;
};

module.exports = PositionRange;