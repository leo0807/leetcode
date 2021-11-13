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

    // 从递推公式dp[i][j] = dp[i + 1][j - 1] + 2 和 dp[i][j] = max(dp[i + 1][j], dp[i][j - 1]) 可以看出，dp[i][j]是依赖于dp[i + 1][j - 1] 和 dp[i + 1][j]，
    // 也就是从矩阵的角度来说，dp[i][j] 下一行的数据。 所以遍历i的时候一定要从下到上遍历，这样才能保证，下一行的数据是经过计算的。
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                // 向内寻找
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                // 如果s[i]与s[j]不相同，说明s[i]和s[j]的同时加入 并不能增加[i, j]区间回文子串的长度，那么分别加入s[i]、s[j]看看哪一个可以组成最长的回文子序列。
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][n - 1];
};