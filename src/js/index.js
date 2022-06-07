import '../css/styles.css';
import generateBoard from './board.generate';
import randomizeButton from './board.randomize';
import randomOnLoad from './board.randomize-on-load';
import Player from './player.constructor';

generateBoard();

const cpu = new Player();
const player = new Player();
window.onload = () => randomOnLoad(player, cpu);
randomizeButton(player);
cpu.designateOpponent(player);
player.designateOpponent(cpu);

const opponentBoard = document.querySelector('#opponent');
const playerBoard = document.querySelector('.board');

function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}
opponentBoard.onclick = (e) => {
  const square = e.target.closest('.square');
  if (!square || square === null) return;
  const elementNumber = getChildElementIndex(square);
  const row = Math.floor(elementNumber / 10);
  const column = elementNumber % 10;
  if (
    // eslint-disable-next-line operator-linebreak
    cpu.map.layout[row][column] !== false &&
    cpu.map.layout[row][column] !== true
  ) {
    player.attack([row, column]);
    let cpuAttack = true;
    while (cpuAttack) {
      const cord0 = Math.floor(Math.random() * 10);
      const cord1 = Math.floor(Math.random() * 10);
      if (
        // eslint-disable-next-line operator-linebreak
        player.map.layout[cord0][cord1] !== false &&
        player.map.layout[cord0][cord1] !== true
      ) {
        cpu.attack([cord0, cord1]);
        cpuAttack = false;
      }
    }
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (cpu.map.layout[i][j] === true) {
        opponentBoard.children.item(i * 10 + j).classList.add('hit');
      }
      if (cpu.map.layout[i][j] === false) {
        opponentBoard.children.item(i * 10 + j).classList.add('miss');
      }
    }
  }
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (player.map.layout[i][j] === true) {
        playerBoard.children.item(i * 10 + j).classList.add('hit');
      }
      if (player.map.layout[i][j] === false) {
        playerBoard.children.item(i * 10 + j).classList.add('miss');
      }
    }
  }
};
