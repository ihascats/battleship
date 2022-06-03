import Ship from '../ship.constructor';

test('Move ship to position row = 2, column = 3', () => {
  const carrier = new Ship(5, 0);
  expect(carrier.move(2, 3)).toStrictEqual([
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
  ]);
});

test('Move ship to position row = 9, column = 0', () => {
  const carrier = new Ship(5, 0);
  expect(carrier.move(9, 0)).toStrictEqual([
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
    [9, 4],
  ]);
});

test("Move ship to position row = 9, column = 0, ship's length is < than 5", () => {
  const carrier = new Ship(4, 0);
  expect(carrier.move(9, 0)).toStrictEqual([
    [9, 0],
    [9, 1],
    [9, 2],
    [9, 3],
  ]);
});

test('Change ship orientation once', () => {
  const carrier = new Ship(5, 0);
  carrier.changeOrientation();
  expect(carrier.gridPositions).toStrictEqual([
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
});

//
describe("Changing ship's orientation twice", () => {
  const carrier = new Ship(5, 0);
  test('Ship orientation changes to vertical', () => {
    carrier.changeOrientation();
    expect(carrier.orientation).toBeFalsy();
  });
  test('Ship orientation changes to horizontal', () => {
    carrier.changeOrientation();
    expect(carrier.orientation).toBeTruthy();
  });
  test("Ship's grid position is horizontal", () => {
    expect(carrier.gridPositions).toStrictEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
  });
});

//
test("Ship's default position = [0, 0]", () => {
  const carrier = new Ship(5, 0);
  expect(carrier.originPosition).toStrictEqual([0, 0]);
});

//
test("Ship's position changes on move", () => {
  const carrier = new Ship(5, 0);
  carrier.move(5, 3);
  expect(carrier.originPosition).toStrictEqual([5, 3]);
});

//
test("Ship's position does not go out of bounds horizontally", () => {
  const carrier = new Ship(5, 0);
  carrier.move(9, 9);
  expect(carrier.originPosition).toStrictEqual([9, 5]);
});

//
describe("Ship's position doesn't go out of bounds vertically", () => {
  const carrier = new Ship(5, 0);
  test('Ship orientation changes to vertical', () => {
    carrier.changeOrientation();
    expect(carrier.orientation).toBeFalsy();
  });
  test('Ship moves to coordinates row = 5 .. 9, column = 9, with input "9, 9"', () => {
    carrier.move(9, 9);
    expect(carrier.gridPositions).toStrictEqual([
      [5, 9],
      [6, 9],
      [7, 9],
      [8, 9],
      [9, 9],
    ]);
  });
});

//
describe("Ship's can change orientation after moving position", () => {
  const carrier = new Ship(5, 0);
  test('Ship orientation changes to vertical', () => {
    carrier.changeOrientation();
    expect(carrier.orientation).toBeFalsy();
  });
  test('Ship moves to coordinates row = 5 .. 9, column = 9, with input "9, 9"', () => {
    carrier.move(9, 9);
    expect(carrier.gridPositions).toStrictEqual([
      [5, 9],
      [6, 9],
      [7, 9],
      [8, 9],
      [9, 9],
    ]);
  });
  test('Ship orientation changes to horizontal', () => {
    carrier.changeOrientation();
    expect(carrier.orientation).toBeTruthy();
  });
  test('Ship grid positions are row = 5, column = 5 .. 9', () => {
    expect(carrier.gridPositions).toStrictEqual([
      [5, 5],
      [5, 6],
      [5, 7],
      [5, 8],
      [5, 9],
    ]);
  });
});

describe('Check that the foresight is correct', () => {
  const carrier = new Ship(3, 0);
  test('Foresight returns potential position that matches vertical [0, 0]', () => {
    expect(carrier.foresight(4, 2)).toStrictEqual([
      [4, 2],
      [4, 3],
      [4, 4],
    ]);
  });
  test('Move matches foresight', () => {
    expect(carrier.move(4, 2)).toStrictEqual([
      [4, 2],
      [4, 3],
      [4, 4],
    ]);
  });
});
