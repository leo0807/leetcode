/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    const n = s.length;
    const dp = Array.from(new Array(n), () => new Array(n).fill(0));
    // 二维矩阵对角线一定相同
    // 完成初始化
    for (let i = 0; i < n; i++) {
        dp[i][i] = 1;
    }
    // 根据递推公式，dp数组从中间往两边走，所以dp[i][j]依赖于
    // dp[i + 1][j - 1] 所以在矩阵的右下角
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};