import displayCurrentBoard from './board.display-current';

function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}

function checkSelectedSquare(opponent, coords) {
  if (
    // eslint-disable-next-line operator-linebreak
    opponent.map.layout[coords[0]][coords[1]] !== false &&
    opponent.map.layout[coords[0]][coords[1]] !== true
  ) {
    return true;
  }
  return false;
}

function combat(player, cpu, playerBoard, cpuBoard, square) {
  const elementNumber = getChildElementIndex(square);
  const row = Math.floor(elementNumber / 10);
  const column = elementNumber % 10;
  if (checkSelectedSquare(cpu, [row, column])) {
    player.attack([row, column]);
    let cpuAttack = true;
    while (cpuAttack) {
      const cord0 = Math.floor(Math.random() * 10);
      const cord1 = Math.floor(Math.random() * 10);
      if (checkSelectedSquare(player, [cord0, cord1])) {
        cpu.attack([cord0, cord1]);
        cpuAttack = false;
      }
    }
  }
  displayCurrentBoard(cpu, cpuBoard);
  displayCurrentBoard(player, playerBoard);
}

export default combat;
