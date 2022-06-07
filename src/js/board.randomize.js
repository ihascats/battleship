function randomizeButton(player) {
  const board = document.querySelector('.board');
  const randomize = document.querySelector('.randomize');
  randomize.onclick = () => {
    player.randomlyPlaceShips();
    board.childNodes.forEach((element) => {
      const square = element;
      square.style.backgroundColor = 'white';
    });
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        if (typeof player.map.layout[i][j] === 'number') {
          board.children.item(i * 10 + j).style.backgroundColor = '#507493';
        }
      }
    }
  };
}

export default randomizeButton;
