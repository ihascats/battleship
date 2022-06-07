function resetBoards() {
  const boards = document.querySelectorAll('.board');
  boards.forEach((board) => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        board.children.item(i * 10 + j).removeAttribute('class');
        board.children.item(i * 10 + j).classList.add('square');
      }
    }
  });
}
export default resetBoards;
