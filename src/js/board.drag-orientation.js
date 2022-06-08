// eslint-disable-next-line import/no-cycle
import updateUserBoard from './board.update-player-map';

function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}

function dragOrientation(orientation, element, imgH, imgV, player, id) {
  let row = 0;
  let column = 0;
  const squares = document.querySelectorAll('.square');
  const shipSquare = element;
  //
  //
  let a = function () {
    //
  };

  if (orientation) {
    shipSquare.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgH, 24, 24);
      squares.forEach((elementSquare) => {
        const square = elementSquare;
        square.ondragenter = (event) => {
          event.preventDefault();
          const elementNumber = getChildElementIndex(square);
          row = Math.floor(elementNumber / 10);
          column = elementNumber % 10;
          a = function () {
            player.map.positionShip(player.map.ships[id], [row, column]);
          };
        };
      });
    };
  }
  if (!orientation) {
    shipSquare.ondragstart = (e) => {
      e.dataTransfer.setDragImage(imgV, 24, 24);
      squares.forEach((elementSquare) => {
        const square = elementSquare;
        square.ondragenter = (event) => {
          event.preventDefault();
          const elementNumber = getChildElementIndex(square);
          row = Math.floor(elementNumber / 10);
          column = elementNumber % 10;
          a = function () {
            player.map.positionShip(player.map.ships[id], [row, column]);
          };
        };
      });
    };
  }
  shipSquare.ondragend = () => {
    a();
    updateUserBoard(player);
  };
}

export default dragOrientation;
