import Player from '../player.constructor';

test('Player has a map', () => {
  const player = new Player();
  expect(player.map).toBeTruthy();
});

test('Player can designate an opponent', () => {
  const player = new Player();
  const cpu = new Player();
  player.designateOpponent(cpu);
  expect(player.opponent).toBe(cpu);
});

test("Player attack will show on his opponent's map", () => {
  const player = new Player();
  const cpu = new Player();
  player.designateOpponent(cpu);
  player.attack([4, 4]);
  expect(cpu.map.layout).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
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

test('Check if all the ships have been placed, should be false', () => {
  const player = new Player();
  expect(player.allShipsPlaced()).toBeFalsy();
});

test('Randomly placing ships is gonna place all the ships on the map', () => {
  const player = new Player();
  player.randomlyPlaceShips();
  expect(player.allShipsPlaced()).toBeTruthy();
});
