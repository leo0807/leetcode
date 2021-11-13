/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const n = s.length;
  const m = t.length;
  const dp = [...Array(n + 1)].map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max.call(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
      }
      if (dp[i][j] === n) return true;
    }
  }
  return dp[n][m] === n;
};