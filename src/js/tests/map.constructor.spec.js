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
