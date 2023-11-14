/**
 * @param {number[][]} grid
 * @return {number}
 */

const DFS = (x, y, row, col, count, grid) => {
  if (x < 0 || x >= row || y < 0 || y >= col || grid[x][y] === -1) return 0;
  if (grid[x][y] === 2) return count === 0 ? 1 : 0;
  let res = 0;
  grid[x][y] = -1;
  res = DFS(x + 1, y, row, col, count - 1, grid) +
    DFS(x, y + 1, row, col, count - 1, grid) +
    DFS(x - 1, y, row, col, count - 1, grid) +
    DFS(x, y - 1, row, col, count - 1, grid);
  grid[x][y] = 0;
  return res;
}
var uniquePathsIII = function (grid) {
  const row = grid.length, col = grid[0].length;
  let x = 0, y = 0, count = 1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === 1) {
        x = i, y = j;
      } else if (grid[i][j] === 0) {
        count++;
      }
    }
  }
  return DFS(x, y, row, col, count, grid);
};

