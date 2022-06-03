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

test('Add a ship to the map layout', () => {
  const map = new Map();
  expect(map.positionShip(map.ships[0], [0, 0])).toStrictEqual([
    [0, 0, 0, 0, 0, null, null, null, null, null],
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
