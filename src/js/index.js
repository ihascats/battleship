import '../css/styles.css';

function createSquare() {
  const square = document.createElement('div');
  square.classList.add('square');
  return square;
}

function getChildElementIndex(node) {
  return Array.prototype.indexOf.call(node.parentNode.children, node);
}

const board = document.querySelectorAll('.board');

board.forEach((element) => {
  const selectedBoard = element;
  for (let i = 0; i < 100; i += 1) {
    element.appendChild(createSquare());
  }
  selectedBoard.onclick = (e) => {
    const square = e.target.closest('.square');
    if (!square || square === null) return;
    const elementNumber = getChildElementIndex(square);
    const row = Math.floor(elementNumber / 10);
    const column = elementNumber % 10;
    console.log(row, column);
  };
});
