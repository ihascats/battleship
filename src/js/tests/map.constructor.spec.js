import { experiments } from 'webpack';
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
  expect(map.positionShip(map.ships[0], [0, 0])).toStrictEqual([
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
    expect(map.positionShip(map.ships[0], [0, 0])).toStrictEqual([
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
  expect(map.positionShip(map.ships[0], [5, 2])).toStrictEqual([
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
  expect(map.positionShip(map.ships[0], [9, 9])).toStrictEqual([
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
