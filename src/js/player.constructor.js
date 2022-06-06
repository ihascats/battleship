import Map from './map.constructor';

class Player {
  constructor() {
    this.map = new Map();
    this.opponent = null;
  }

  designateOpponent(opponent) {
    this.opponent = opponent;
  }

  attack(coordinates) {
    this.opponent.map.receiveAttack(coordinates);
  }

  allShipsPlaced() {
    const { layout } = this.map;
    const shipIds = [0, 1, 2, 3, 4];
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (!Number.isNaN(layout[i][j])) {
          if (shipIds.includes(layout[i][j])) {
            const index = shipIds.indexOf(layout[i][j]);
            if (index !== -1) {
              shipIds.splice(index, 1);
            }
          }
        }
      }
    }
    if (shipIds.length > 0) return false;
    return true;
    //
  }

  randomlyPlaceShips() {
    const shipIds = [0, 1, 2, 3, 4];
    while (shipIds.length > 0) {
      const { layout } = this.map;
      let notPlaced = true;
      while (notPlaced) {
        const coord0 = Math.floor(Math.random() * 10);
        const coord1 = Math.floor(Math.random() * 10);
        const coords = [coord0, coord1];
        const ship = this.map.ships[shipIds[0]];

        if (this.map.verifyPlacement(ship, coords, layout)) {
          this.map.positionShip(ship, coords);
          shipIds.shift();
          notPlaced = false;
        }

        if (!this.map.verifyPlacement(ship, coords, layout)) {
          ship.changeOrientation();
          if (this.map.verifyPlacement(ship, coords, layout)) {
            this.map.positionShip(ship, coords);
            shipIds.shift();
            notPlaced = false;
          }
        }
      }
    }
    //
  }
}

export default Player;
