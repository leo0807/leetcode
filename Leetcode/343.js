/**
 * @param {number} n
 * @return {number}
 * 贪心算法
 */
var integerBreak = function (n) {
    if (n === 1 || n === 2) return 1;
    if (n === 3) return 2;

    let product = 1;
    while (n > 4) {
        product *= 3;
        n -= 3;
    }
    product *= n;
    return product;
};

/**
 * @param {number} n
 * @return {number}
 * DP
 * 1. j * dp[i - j] 是对 i - j 的拆分， 是尝试多个数字相乘
 * 2. j * (i - j) 是尝试两个数字相乘
 */
var integerBreak = function (n) {
    const dp = new Array(n + 1).fill(0);
    dp[2] = 1;
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max.call(null, dp[i], j * dp[i - j], j * (i - j));
        }
    }
    return dp[n];
};