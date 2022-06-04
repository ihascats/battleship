/* eslint-disable consistent-return */
class Ship {
  constructor(size, id) {
    this.size = size;
    this.id = id;
    this.orientation = true;
    this.originPosition = [0, 0];
    this.gridPositions = [];
    // true === row length / horizontal
    // false === column length / vertical
  }

  changeOrientation() {
    this.orientation = !this.orientation;
    this.move(this.originPosition[0], this.originPosition[1]);
  }

  move(rowCoord, colCoord) {
    let row = rowCoord;
    let col = colCoord;
    if (this.orientation) {
      if (col > 10 - this.size) {
        col = 10 - this.size;
      }
      const shipPositions = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPositions.push([row, col + i]);
      }
      this.gridPositions = shipPositions;
      this.originPosition = [row, col];
      return shipPositions;
    }

    if (!this.orientation) {
      if (row > 10 - this.size) {
        row = 10 - this.size;
      }
      const shipPositions = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPositions.push([row + i, col]);
      }
      this.gridPositions = shipPositions;
      this.originPosition = [row, col];
      return shipPositions;
    }
  }

  foresight(rowCoord, colCoord) {
    let row = rowCoord;
    let col = colCoord;
    if (this.orientation) {
      if (col > 10 - this.size) {
        col = 10 - this.size;
      }
      const shipPotentialPosition = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPotentialPosition.push([row, col + i]);
      }
      return shipPotentialPosition;
    }

    if (!this.orientation) {
      if (row > 10 - this.size) {
        row = 10 - this.size;
      }
      const shipPotentialPosition = [];
      for (let i = 0; i < this.size; i += 1) {
        shipPotentialPosition.push([row + i, col]);
      }
      return shipPotentialPosition;
    }
  }
}

export default Ship;
