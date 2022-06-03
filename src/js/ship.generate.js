class Ship {
  constructor(size, id) {
    this.size = size;
    this.id = id;
    this.direction = true;
    // true === row length / horizontal
    // false === column length / vertical
  }

  changeDirection() {
    this.direction = !this.direction;
  }

  move(rowCoord, colCoord) {
    let row = rowCoord;
    let col = colCoord;
    if (this.direction) {
      if (col > 10 - this.size) {
        col = 10 - this.size;
      }
      const shipPositions = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPositions.push([row, col + i]);
      }
      return shipPositions;
    }

    if (!this.direction) {
      if (row > 10 - this.size) {
        row = 10 - this.size;
      }
      const shipPositions = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPositions.push([row + i, col]);
      }
      return shipPositions;
    }
    return [rowCoord, colCoord];
  }
}

export default Ship;
