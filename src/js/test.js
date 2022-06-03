import Map from './map.generate';
import Ship from './ship.generate';

test('Ship positions with origin 2,3 and direction row', () => {
  const carrier = new Ship(5, 0);
  expect(carrier.move(2, 3)).toStrictEqual([
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
  ]);
});

test('Ship positions with origin 9, 0 and direction row', () => {
  const carrier = new Ship(5, 0);
  expect(carrier.move(9, 0)).toStrictEqual([
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
  ]);
});

test('Ship direction can be changed', () => {
  const carrier = new Ship(5, 0);
  carrier.changeDirection();
  carrier.changeDirection();
  expect(carrier.move(9, 0)).toStrictEqual([
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
  ]);
});

test('Ship positions with origin 9, 0 and direction column', () => {
  const carrier = new Ship(5, 0);
  carrier.changeDirection();
  expect(carrier.move(2, 3)).toStrictEqual([
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],
  ]);
});

test('Ship positions wont go out of bounds direction row', () => {
  const carrier = new Ship(5, 0);
  expect(carrier.move(9, 9)).toStrictEqual([
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8],
    [9, 9],
  ]);
});

test('Ship positions wont go out of bounds direction column', () => {
  const carrier = new Ship(5, 0);
  carrier.changeDirection();
  expect(carrier.move(9, 9)).toStrictEqual([
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
  ]);
});
