function generateBoard() {
  function createSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
  }

  const board = document.querySelectorAll('.board');

  board.forEach((element) => {
    for (let i = 0; i < 100; i += 1) {
      element.appendChild(createSquare());
    }
  });
}

export default generateBoard;
