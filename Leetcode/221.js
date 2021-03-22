/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    const row = matrix.length,
        col = matrix[0].length;
    let dp = Array.from(Array(row + 1), () => new Array(col + 1).fill(0)),
        res = 0;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            if (matrix[i - 1][j - 1] === '1') {
                dp[i][j] = Math.min.call(Math, dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]) + 1;
                res = Math.max(res, dp[i][j]);
            }
        }
    }
    return res * res;
};