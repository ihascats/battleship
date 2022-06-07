function randomOnLoad(player, cpu) {
  const board = document.querySelector('.board');
  cpu.randomlyPlaceShips();
  cpu.randomlyPlaceShips();
  player.randomlyPlaceShips();
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      if (typeof player.map.layout[i][j] === 'number') {
        board.children.item(i * 10 + j).classList.add('ship');
      }
    }
  }
}
export default randomOnLoad;
