function displayCurrentBoard(opponent, opponentBoard) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (opponent.map.layout[i][j] === true) {
        opponentBoard.children.item(i * 10 + j).classList.add('hit');
      }
      if (opponent.map.layout[i][j] === false) {
        opponentBoard.children.item(i * 10 + j).classList.add('miss');
      }
    }
  }
}

export default displayCurrentBoard;
