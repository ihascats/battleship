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

    return this.layout;
  }
}

export default Map;
