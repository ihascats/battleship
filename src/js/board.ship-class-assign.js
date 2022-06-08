import dragOrientation from './board.drag-orientation';

function assignClass(shipIdNumber, player, playerBoard, row, column) {
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
      horizontal.src = `../src/img/${shipType[iteration]}Horizontal.png`;
      const vertical = document.createElement('img');
      vertical.src = `../src/img/${shipType[iteration]}Vertical.png`;
      const shipId = shipIdNumber;
      const { orientation } = player.map.ships[shipId];
      board.children.item(i * 10 + j).classList.add(shipType[iteration]);
      board.children.item(i * 10 + j).draggable = true;
      dragOrientation(
        orientation,
        board.children.item(i * 10 + j),
        horizontal,
        vertical,
      );
    }
  }
}

export default assignClass;
