/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
    const n = jobDifficulty.length;
    if (n < d) return -1;
    const dp = Array.from(new Array(n + 1), () => new Array(d + 1).fill(Infinity));
    dp[0][0] = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= d; j++) {
            let task = 0
            // dp[i][j - 1] 至 jobDifficulty[j + 1, i]中间 取最大值
            for (let k = i - 1; k >= j - 1; k--) {
                // 一天的工作难度是当天应该完成工作的最大难度
                task = Math.max(task, jobDifficulty[k]);
                dp[i][j] = Math.min(dp[i][j], dp[k][j - 1] + task);
            }
        }
    }
    // console.log(dp)
    return dp[n][d];
};