/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    const row = grid.length,
        col = grid[0].length;
    const dp = Array.from(Array(row + 1), () => new Array(col + 1).fill(Infinity));
    dp[1][0] = 0;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[row][col];
};