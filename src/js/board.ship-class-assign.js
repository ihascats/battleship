// eslint-disable-next-line import/no-cycle
import dragOrientation from './board.drag-orientation';
// eslint-disable-next-line import/no-cycle
import updateUserBoard from './board.update-player-map';

import bsHorizontal from '../img/battleshipHorizontal.png';
import bsVertical from '../img/battleshipVertical.png';
import carHorizontal from '../img/carrierHorizontal.png';
import carVertical from '../img/carrierVertical.png';
import cruHorizontal from '../img/cruiserHorizontal.png';
import cruVertical from '../img/cruiserVertical.png';
import dstHorizontal from '../img/destroyerHorizontal.png';
import dstVertical from '../img/destroyerVertical.png';
import subHorizontal from '../img/submarineHorizontal.png';
import subVertical from '../img/submarineVertical.png';

function assignClass(shipIdNumber, player, playerBoard, row, column) {
  const shipHorizontal = [
    carHorizontal,
    bsHorizontal,
    cruHorizontal,
    subHorizontal,
    dstHorizontal,
  ];
  const shipVeritacal = [
    carVertical,
    bsVertical,
    cruVertical,
    subVertical,
    dstVertical,
  ];
  const i = row;
  const j = column;
  const board = playerBoard;

  const shipType = [
    'carrier',
    'battleship',
    'cruiser',
    'submarine',
    'destroyer',
  ];
  for (let iteration = 0; iteration < 5; iteration += 1) {
    if (shipIdNumber === iteration) {
      const horizontal = document.createElement('img');
      horizontal.src = shipHorizontal[iteration];
      const vertical = document.createElement('img');
      vertical.src = shipVeritacal[iteration];
      const shipId = shipIdNumber;
      const { orientation } = player.map.ships[shipId];
      board.children.item(i * 10 + j).classList.add(shipType[iteration]);
      board.children.item(i * 10 + j).draggable = true;
      dragOrientation(
        orientation,
        board.children.item(i * 10 + j),
        horizontal,
        vertical,
        player,
        shipId,
      );
      board.children.item(i * 10 + j).onclick = () => {
        //
        player.map.rotateShip(player.map.ships[shipId]);
        updateUserBoard(player);
      };
    }
  }
}

export default assignClass;
