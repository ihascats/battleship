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

  cloneMap(ship) {
    const mapLayoutCopy = JSON.parse(JSON.stringify(this.layout));
    const layoutWithoutSelectedShip = mapLayoutCopy.map(
      (secondArray) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        secondArray.map((item) => {
          let result = item;
          if (item === ship.id) {
            result = null;
          }
          if (Array.isArray(result)) {
            if (result.includes(ship.id)) {
              const index = result.indexOf(ship.id);
              if (index !== -1) {
                result.splice(index, 1);
              }
            }
          }
          if (Array.isArray(result)) {
            if (!result.length) {
              result = null;
            }
          }
          return result;
        }),
      // eslint-disable-next-line function-paren-newline
    );
    return layoutWithoutSelectedShip;
  }

  // eslint-disable-next-line class-methods-use-this
  verifyPlacement(ship, coordinates, verificationLayout) {
    let verification = true;
    ship.foresight(coordinates[0], coordinates[1]).forEach((item) => {
      const row = item[0];
      const col = item[1];
      if (verificationLayout[row][col] !== null) {
        // eslint-disable-next-line no-useless-return
        verification = false;
      }
    });
    return verification;
  }

  positionShip(ship, coordinates) {
    const layoutWithoutSelectedShip = this.cloneMap(ship);

    const canPlaceShip = this.verifyPlacement(
      ship,
      coordinates,
      layoutWithoutSelectedShip,
    );
    if (!canPlaceShip) return;

    this.layout = JSON.parse(JSON.stringify(layoutWithoutSelectedShip));
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
          if (Array.isArray(this.layout[i][j])) {
            this.layout[i][j].push(ship.id);
          }
          if (this.layout[i][j] === null) {
            this.layout[i][j] = [ship.id];
          }
        }
      }
    }
  }

  rotateShip(ship) {
    const verificationLayout = this.cloneMap(ship);
    ship.changeOrientation();
    const canPlaceShip = this.verifyPlacement(
      ship,
      ship.originPosition,
      verificationLayout,
    );
    if (!canPlaceShip) {
      ship.changeOrientation();
      return;
    }
    this.positionShip(ship, ship.originPosition);
  }
}

export default Map;
