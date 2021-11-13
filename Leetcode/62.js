/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * dp方法
 * 1. 确定dp数组（dp table）以及下标的含义
 * dp[i][j] ：表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
 * 2. 确定递推公式
 * 想要求dp[i][j]，只能有两个方向来推导出来，即dp[i - 1][j] 和 dp[i][j - 1]。
 * 此时在回顾一下 dp[i - 1][j] 表示啥，是从(0, 0)的位置到(i - 1, j)有几条路径，dp[i][j - 1]同理。
 * 那么很自然，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]，因为dp[i][j]只有这两个方向过来。
 * 3. dp数组的初始化
 * 如何初始化呢，首先dp[i][0]一定都是1，因为从(0, 0)的位置到(i, 0)的路径只有一条，那么dp[0][j]也同理。
 */
var uniquePaths = function (m, n) {
    let dp = [...Array(m)].map(x => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 1;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};

// 数论方法

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 1. 从左上角走到右下角，至少需要 m + n - 2 步
 * 2. 在 m + n - 2 步中， 一定有 m - 1步是要向下走的
 * 问题转化为，给你m + n - 2个不同的数，随便取m - 1个数，有几种取法
 * 即C (m - 1) (m + n -2)
 * */
var uniquePaths = function (m, n) {
    let numerator = 1, denominator = 1,
        count = m - 1, t = m + n - 2;
    while (count--) numerator *= (t--);
    for (let i = 1; i <= m - 1; i++) denominator *= i;
    return (numerator / denominator);
};