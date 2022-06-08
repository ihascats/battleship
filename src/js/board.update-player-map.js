// eslint-disable-next-line import/no-cycle
import assignClass from './board.ship-class-assign';

function updateUserBoard(player) {
  //
  const board = document.querySelector('.board');
  board.childNodes.forEach((element) => {
    const square = element;
    while (square.classList.length > 1) {
      square.classList.remove(square.classList[square.classList.length - 1]);
    }
    square.draggable = false;
    square.ondragstart = null;
  });
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof player.map.layout[i][j] === 'number') {
        board.children.item(i * 10 + j).classList.add('ship');
        assignClass(player.map.layout[i][j], player, board, i, j);
      }
    }
  }
}
export default updateUserBoard;
