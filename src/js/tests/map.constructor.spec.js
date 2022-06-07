import Map from '../map.constructor';
import Ship from '../ship.constructor';

test('Map layout is a 2d array, it contains 10 arrays, that each contain 10 null items', () => {
  const map = new Map();
  expect(map.layout).toStrictEqual([
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
  ]);
});

test('Map contains 5 ships', () => {
  const map = new Map();

  expect(map.ships).toEqual([
    new Ship(5, 0),
    new Ship(4, 1),
    new Ship(3, 2),
    new Ship(3, 3),
    new Ship(2, 4),
  ]);
});

test('Add a ship to the corner of the map layout', () => {
  const map = new Map();
  map.positionShip(map.ships[0], [0, 0]);
  expect(map.layout).toStrictEqual([
    [0, 0, 0, 0, 0, [0], null, null, null, null],
    [[0], [0], [0], [0], [0], [0], null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

describe('Add a vertically oriented ship to the corner of the map layout', () => {
  const map = new Map();

  test('Rotate the ship', () => {
    map.ships[0].changeOrientation();
    expect(map.ships[0].orientation).toBeFalsy();
  });
  test('Add a ship to the map layout', () => {
    map.positionShip(map.ships[0], [0, 0]);
    expect(map.layout).toStrictEqual([
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [[0], [0], null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});

test('Add a ship to the middle of the map layout', () => {
  const map = new Map();
  map.positionShip(map.ships[0], [5, 2]);
  expect(map.layout).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, [0], [0], [0], [0], [0], [0], [0], null, null],
    [null, [0], 0, 0, 0, 0, 0, [0], null, null],
    [null, [0], [0], [0], [0], [0], [0], [0], null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ]);
});

test('Add a ship to the opposite corner of the map layout', () => {
  const map = new Map();
  map.positionShip(map.ships[0], [9, 9]);
  expect(map.layout).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, [0], [0], [0], [0], [0], [0]],
    [null, null, null, null, [0], 0, 0, 0, 0, 0],
  ]);
});

describe('Add multiple ships to the map', () => {
  const map = new Map();
  test('Add the first ship to the map', () => {
    map.positionShip(map.ships[0], [5, 2]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Add the second ship to the map', () => {
    map.positionShip(map.ships[1], [2, 2]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, [1], [1], [1], [1], [1], [1], null, null, null],
      [null, [1], 1, 1, 1, 1, [1], null, null, null],
      [null, [1], [1], [1], [1], [1], [1], null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});

describe('Overlapped ship outlines display both ship outlines', () => {
  const map = new Map();
  test('Add the first ship to the map', () => {
    map.positionShip(map.ships[0], [5, 2]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Add the second ship to the map so that the ship outlines overlap', () => {
    map.positionShip(map.ships[1], [3, 2]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [1], [1], [1], [1], [1], [1], null, null, null],
      [null, [1], 1, 1, 1, 1, [1], null, null, null],
      [null, [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});

describe("Ship can't overlap another ship or its outline", () => {
  const map = new Map();
  test('Add the first ship to the map', () => {
    map.positionShip(map.ships[0], [5, 2]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Attempt adding a ship so it overlaps another', () => {
    map.positionShip(map.ships[1], [5, 0]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test("Attempt adding a ship so it overlaps another ship's outline", () => {
    map.positionShip(map.ships[1], [4, 0]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, [0], 0, 0, 0, 0, 0, [0], null, null],
      [null, [0], [0], [0], [0], [0], [0], [0], null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  describe("Vertically oriented ship can't overlap another ship", () => {
    test("Change ship's orientation to vertical", () => {
      map.ships[1].changeOrientation();
      expect(map.ships[1].orientation).toBeFalsy();
    });
    test('Attempt adding a ship so it overlaps another ship', () => {
      map.positionShip(map.ships[1], [1, 5]);
      expect(map.layout).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, [0], [0], [0], [0], [0], [0], [0], null, null],
        [null, [0], 0, 0, 0, 0, 0, [0], null, null],
        [null, [0], [0], [0], [0], [0], [0], [0], null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
  });
});

describe('Moving a ship after it was placed does not cause duplication', () => {
  const map = new Map();
  test('Place a ship at 0, 0', () => {
    map.positionShip(map.ships[0], [0, 0]);
    expect(map.layout).toStrictEqual([
      [0, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Move the ship to coordinates  row = 6, column = 3', () => {
    map.positionShip(map.ships[0], [6, 3]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, [0], [0], [0], [0], [0], [0], [0], null],
      [null, null, [0], 0, 0, 0, 0, 0, [0], null],
      [null, null, [0], [0], [0], [0], [0], [0], [0], null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  describe('Add a second ship and move it around', () => {
    test('Place a ship at 8, 1', () => {
      map.positionShip(map.ships[1], [8, 1]);
      expect(map.layout).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, [0], [0], [0], [0], [0], [0], [0], null],
        [null, null, [0], 0, 0, 0, 0, 0, [0], null],
        [[1], [1], [0, 1], [0, 1], [0, 1], [0, 1], [0], [0], [0], null],
        [[1], 1, 1, 1, 1, [1], null, null, null, null],
        [[1], [1], [1], [1], [1], [1], null, null, null, null],
      ]);
    });
    test('Attempt to move the ship to 7, 1', () => {
      map.positionShip(map.ships[1], [7, 1]);
      expect(map.layout).toStrictEqual([
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, [0], [0], [0], [0], [0], [0], [0], null],
        [null, null, [0], 0, 0, 0, 0, 0, [0], null],
        [[1], [1], [0, 1], [0, 1], [0, 1], [0, 1], [0], [0], [0], null],
        [[1], 1, 1, 1, 1, [1], null, null, null, null],
        [[1], [1], [1], [1], [1], [1], null, null, null, null],
      ]);
    });
  });
});

test('Cloning a map layout', () => {
  const map = new Map();
  const mapCopy = [...map.layout];
  expect(mapCopy).toStrictEqual(map.layout);
});

describe('Rotate the ship without moving it', () => {
  const map = new Map();
  test('Place a ship at 0, 0', () => {
    map.positionShip(map.ships[0], [0, 0]);
    expect(map.layout).toStrictEqual([
      [0, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Rotate the ship', () => {
    map.rotateShip(map.ships[0]);
    expect(map.layout).toStrictEqual([
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [0, [0], null, null, null, null, null, null, null, null],
      [[0], [0], null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test('Move ship to 9, 9', () => {
    map.positionShip(map.ships[0], [9, 9]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, [0], [0]],
      [null, null, null, null, null, null, null, null, [0], 0],
      [null, null, null, null, null, null, null, null, [0], 0],
      [null, null, null, null, null, null, null, null, [0], 0],
      [null, null, null, null, null, null, null, null, [0], 0],
      [null, null, null, null, null, null, null, null, [0], 0],
    ]);
  });

  test('Rotate the ship at the new coordinates', () => {
    map.rotateShip(map.ships[0]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, [0], 0, 0, 0, 0, 0],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test('Add a second ship', () => {
    map.positionShip(map.ships[1], [9, 3]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, [0], 0, 0, 0, 0, 0],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, [1], [1], [1], [1], [1], [1], null, null],
      [null, null, [1], 1, 1, 1, 1, [1], null, null],
    ]);
  });

  test('Attempt to rotate the first ship where it would overlap the second ship', () => {
    map.rotateShip(map.ships[0]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, [0], 0, 0, 0, 0, 0],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, [1], [1], [1], [1], [1], [1], null, null],
      [null, null, [1], 1, 1, 1, 1, [1], null, null],
    ]);
  });

  test('Attempt to rotate the second ship so that their outlines would overlap', () => {
    map.rotateShip(map.ships[1]);
    expect(map.layout).toStrictEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, [0], [0], [0], [0], [0], [0]],
      [null, null, [1], [1], [0, 1], 0, 0, 0, 0, 0],
      [null, null, [1], 1, [0, 1], [0], [0], [0], [0], [0]],
      [null, null, [1], 1, [1], null, null, null, null, null],
      [null, null, [1], 1, [1], null, null, null, null, null],
      [null, null, [1], 1, [1], null, null, null, null, null],
    ]);
  });
});

describe('Place all the ships on the playing map', () => {
  const map = new Map();
  describe('Place the Carrier at coordinates row = 0, column = 2, then rotate it', () => {
    test('Place the Carrier at row = 0, column = 2', () => {
      map.positionShip(map.ships[0], [0, 2]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, 0, 0, 0, 0, [0], null, null],
        [null, [0], [0], [0], [0], [0], [0], [0], null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
    test('Rotate the carrier', () => {
      map.rotateShip(map.ships[0]);
      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], [0], [0], null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
  });

  describe('Place the Battleship at coordinates row = 6, column = 0', () => {
    test('Place the Battleship at row = 6, column = 0', () => {
      map.positionShip(map.ships[1], [6, 0]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
  });

  describe('Place the Cruiser at coordinates row = 9, column = 0, then attempt to rotate it', () => {
    test('Place the Cruiser at row = 9, column = 0', () => {
      map.positionShip(map.ships[2], [9, 0]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });
    test('Attempt to rotate the cruiser', () => {
      map.rotateShip(map.ships[2]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });
  });

  describe('Place the Submarine at coordinates row = 0, column = 7, then rotate it', () => {
    test('Place the Submarine at row = 0, column = 7', () => {
      map.positionShip(map.ships[3], [0, 7]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, [3], 3, 3, 3],
        [null, [0], 0, [0], null, null, [3], [3], [3], [3]],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });
    test('Rotate the Submarine', () => {
      map.rotateShip(map.ships[3]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0], null, null, [3], [3], [3], null],
        [null, [0], 0, [0], null, null, null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });
  });

  describe('Place the Destroyer at coordinates row = 3, column = 4, then rotate it', () => {
    test('Place the Destroyer at row = 3, column = 4', () => {
      map.positionShip(map.ships[4], [3, 4]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0, 4], [4], [4], [3, 4], 3, [3], null],
        [null, [0], 0, [0, 4], 4, 4, [3, 4], [3], [3], null],
        [null, [0], 0, [0, 4], [4], [4], [4], null, null, null],
        [[1], [0, 1], [0, 1], [0, 1], [1], null, null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });

    test('Rotate the Destroyer', () => {
      map.rotateShip(map.ships[4]);

      expect(map.layout).toStrictEqual([
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0], null, null, [3], 3, [3], null],
        [null, [0], 0, [0, 4], [4], [4], [3], 3, [3], null],
        [null, [0], 0, [0, 4], 4, [4], [3], [3], [3], null],
        [null, [0], 0, [0, 4], 4, [4], null, null, null, null],
        [[1], [0, 1], [0, 1], [0, 1, 4], [1, 4], [4], null, null, null, null],
        [1, 1, 1, 1, [1], null, null, null, null, null],
        [[1], [1], [1], [1], [1], null, null, null, null, null],
        [[2], [2], [2], [2], null, null, null, null, null, null],
        [2, 2, 2, [2], null, null, null, null, null, null],
      ]);
    });
  });
});

describe('Attacking will display wether its a hit or miss', () => {
  const map = new Map();
  test('Add the Carrier to row = 0, column = 0', () => {
    map.positionShip(map.ships[0], [0, 0]);
    expect(map.layout).toStrictEqual([
      [0, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Attack coordinates row = 4, column = 4', () => {
    map.receiveAttack([4, 4]);
    expect(map.layout).toStrictEqual([
      [0, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, false, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });

  test('Attack coordinates row = 0, column = 0', () => {
    map.receiveAttack([0, 0]);
    expect(map.layout).toStrictEqual([
      [true, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, false, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Attack coordinates row = 1, column = 0', () => {
    map.receiveAttack([1, 0]);
    expect(map.layout).toStrictEqual([
      [true, 0, 0, 0, 0, [0], null, null, null, null],
      [false, [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, false, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  describe('Destroying a ship should mark adjacent positions as well', () => {
    test('Attack coordinates row = 0, column = 1', () => {
      map.receiveAttack([0, 1]);
      expect(map.layout).toStrictEqual([
        [true, true, 0, 0, 0, [0], null, null, null, null],
        [false, [0], [0], [0], [0], [0], null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, false, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
    test('Attack coordinates row = 0, column = 2', () => {
      map.receiveAttack([0, 2]);
      expect(map.layout).toStrictEqual([
        [true, true, true, 0, 0, [0], null, null, null, null],
        [false, [0], [0], [0], [0], [0], null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, false, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
    test('Attack coordinates row = 0, column = 3', () => {
      map.receiveAttack([0, 3]);
      expect(map.layout).toStrictEqual([
        [true, true, true, true, 0, [0], null, null, null, null],
        [false, [0], [0], [0], [0], [0], null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, false, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
    test('Attack coordinates row = 0, column = 4, destroying the ship', () => {
      map.receiveAttack([0, 4]);
      expect(map.layout).toStrictEqual([
        [true, true, true, true, true, false, null, null, null, null],
        [false, false, false, false, false, false, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, false, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
  });
});

describe('Return true if all ships on the map have been destroyed', () => {
  //
  const map = new Map();
  test('Set up the map short of the winning condition', () => {
    map.layout = [
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, null, null, null, null, null, null],
      [true, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ];
    expect(map.layout).toStrictEqual([
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, true, null, true, null, null, null],
      [true, null, true, null, null, null, null, null, null, null],
      [true, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  describe('If map contains 17 true statements then return true else false', () => {
    test('Check if all the ships on the map have been destroyed, by meeting the criteria of 17 true statements (15/17)', () => {
      expect(map.allShipsDestroyed()).toBeFalsy();
    });
    test('Set up the map so it meets the winning condition', () => {
      map.layout = [
        [true, null, true, null, true, null, true, null, true, null],
        [true, null, true, null, true, null, true, null, true, null],
        [true, null, true, null, true, null, true, null, null, null],
        [true, null, true, null, null, null, null, null, null, null],
        [true, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ];
      expect(map.layout).toStrictEqual([
        [true, null, true, null, true, null, true, null, true, null],
        [true, null, true, null, true, null, true, null, true, null],
        [true, null, true, null, true, null, true, null, null, null],
        [true, null, true, null, null, null, null, null, null, null],
        [true, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null, null, null],
      ]);
    });
    test('Check if all the ships on the map have been destroyed, by meeting the criteria of 17 true statements (17/17)', () => {
      expect(map.allShipsDestroyed()).toBeTruthy();
    });
  });
});

describe('Reset map sets all fields to null', () => {
  const map = new Map();
  test('Add a ship to the corner of the map layout', () => {
    map.positionShip(map.ships[0], [0, 0]);
    expect(map.layout).toStrictEqual([
      [0, 0, 0, 0, 0, [0], null, null, null, null],
      [[0], [0], [0], [0], [0], [0], null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  test('Reset map', () => {
    map.resetMap();
    expect(map.layout).toStrictEqual([
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
    ]);
  });
});
