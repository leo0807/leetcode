/**
 * @param {number} n
 * @return {number}
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

const integerBreak2 = function (n) {
    const dp = new Array(n + 1).fill(1);
    for (let i = 2; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i](Math.max(j, dp[j])) * (Math.max(i - j, dp[i - j])));
        }
    }
    return dp[n];
}