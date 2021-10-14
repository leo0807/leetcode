function knapSack(bag, weights, values) {
    const n = weights.length;
    const dp = Array.from(new Array(n + 1), () => new Array(bag + 1).fill(0));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= bag; j++) {
            if (bag - weights[i - 1] < 0) {
                dp[i][j] = dp[i - 1][j];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weights[i - 1]] + values[i - 1])
            }
        }
    }
    console.log(dp);
    return dp[n][bag];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const bag = 50;
console.log(knapSack(bag, weights, values));