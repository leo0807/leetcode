/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  const visited = [...Array(m)].map(() => new Array(n).fill(false));
  return dfs(0, 0);
  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n
      || (i % 10 + (i / 10 >> 0) + j % 10 + (j / 10 >> 0) > k)
      || visited[i][j]) {
      return 0;
    }
    visited[i][j] = true;
    return dfs(i + 1, j) +
      dfs(i - 1, j) +
      dfs(i, j + 1) +
      dfs(i, j - 1) +
      1;
  }
};
