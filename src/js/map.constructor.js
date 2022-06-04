import Ship from './ship.constructor';

class Map {
  constructor() {
    this.layout = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];

    const carrier = new Ship(5, 0);
    const battleship = new Ship(4, 1);
    const cruiser = new Ship(3, 2);
    const submarine = new Ship(3, 3);
    const destroyer = new Ship(2, 4);

    this.ships = [carrier, battleship, cruiser, submarine, destroyer];
  }

  positionShip(ship, coordinates) {
    ship.move(coordinates[0], coordinates[1]);
    ship.gridPositions.forEach((item) => {
      const row = item[0];
      const col = item[1];
      this.layout[row][col] = ship.id;
    });

    const startRow = ship.gridPositions[0][0] - 1;
    const startCol = ship.gridPositions[0][1] - 1;
    const endRow = ship.gridPositions[ship.gridPositions.length - 1][0] + 1;
    const endCol = ship.gridPositions[ship.gridPositions.length - 1][1] + 1;

    for (let i = startRow; i <= endRow; i += 1) {
      for (let j = startCol; j <= endCol; j += 1) {
        if (i >= 0 && i < 10 && j >= 0 && j < 10) {
          if (this.layout[i][j] === null) {
            this.layout[i][j] = [ship.id];
          }
        }
      }
    }
    return this.layout;
  }
}

export default Map;
