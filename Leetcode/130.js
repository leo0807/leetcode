/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 从边框开始，记录所有边框所链接的O，并置换位其他符号，其余所有的O则都可以置换为X
 */
var solve = function (board) {
  const row = board.length;
  const col = board[0].length;

  for (let i = 0; i < row; i++) {
    dfs(i, 0);
    dfs(i, col - 1);
  }

  for (let i = 0; i < col; i++) {
    dfs(0, i);
    dfs(row - 1, i);
  }


  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === 'O') board[i][j] = 'X';
      else if (board[i][j] === '-') board[i][j] = 'O';
    }
  }
  function dfs(i, j) {
    if (i >= row || i < 0 || j >= col || j < 0 || board[i][j] != 'O') {
      return;
    }
    board[i][j] = '-';
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }
};