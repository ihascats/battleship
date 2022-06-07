function randomizeButton(player) {
  const board = document.querySelector('.board');
  player.randomlyPlaceShips();
  board.childNodes.forEach((element) => {
    const square = element;
    square.classList.remove('ship');
  });
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof player.map.layout[i][j] === 'number') {
        board.children.item(i * 10 + j).classList.add('ship');
      }
    }
  }
}

export default randomizeButton;
