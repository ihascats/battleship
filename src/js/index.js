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
resetButton.disabled = true;
const randomize = document.querySelector('.randomize');
const winner = document.querySelector('.winner');

cpuBoard.style.opacity = '30%';

startButton.onclick = () => {
  startButton.disabled = true;
  resetButton.disabled = false;
  cpuBoard.style.opacity = '100%';
  randomize.onclick = null;
  randomize.classList.add('disableRandomize');
  cpuBoard.onclick = (e) => {
    const square = e.target.closest('.square');
    if (!square || square === null) return;
    combat(player, cpu, playerBoard, cpuBoard, square);
    if (cpu.map.allShipsDestroyed()) {
      //
      cpuBoard.onclick = null;

      cpuBoard.style.opacity = '30%';
      playerBoard.style.opacity = '30%';
      const won = document.createElement('h1');
      won.textContent = 'Player1 won';
      winner.appendChild(won);
    }
    if (player.map.allShipsDestroyed()) {
      //
      cpuBoard.onclick = null;

      cpuBoard.style.opacity = '30%';
      playerBoard.style.opacity = '30%';
      const won = document.createElement('h1');
      won.textContent = 'Albert won';
      winner.appendChild(won);
    }
  };
};

resetButton.onclick = () => {
  resetButton.disabled = true;
  startButton.disabled = false;

  cpuBoard.onclick = null;
  cpuBoard.style.opacity = '30%';
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
