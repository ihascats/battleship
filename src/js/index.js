import '../css/styles.css';
import combat from './board.combat';
import generateBoard from './board.generate';
import randomizeButton from './board.randomize';
import randomOnLoad from './board.randomize-on-load';
import resetBoards from './board.reset';
import Player from './player.constructor';

generateBoard();

const cpu = new Player();
const player = new Player();

const cpuBoard = document.querySelector('#opponent');
const playerBoard = document.querySelector('.board');

window.onload = () => randomOnLoad(player, cpu);

cpu.designateOpponent(player);
player.designateOpponent(cpu);

const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const randomize = document.querySelector('.randomize');

startButton.onclick = () => {
  randomize.onclick = null;
  randomize.classList.add('disableRandomize');
  cpuBoard.onclick = (e) => {
    const square = e.target.closest('.square');
    if (!square || square === null) return;
    combat(player, cpu, playerBoard, cpuBoard, square);
  };
};

resetButton.onclick = () => {
  cpuBoard.onclick = null;

  player.map.resetMap();
  cpu.map.resetMap();
  resetBoards();
  randomOnLoad(player, cpu);
  randomize.onclick = () => {
    randomizeButton(player);
  };
  randomize.classList.remove('disableRandomize');
  //
};

randomize.onclick = () => {
  randomizeButton(player);
};
