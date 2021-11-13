/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 标准dp问题
 * 1. dp[i][j]：以i-1为结尾的字符串word1，和以j-1位结尾的字符串word2，想要达到相等，所需要删除元素的最少次数。
 * 2. dp[i][0]：word2为空字符串，以i-1为结尾的字符串word1要删除多少个元素，才能和word2相同呢，很明显dp[i][0] = i
 */
// 情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1
// 情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1
// 情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2
var minDistance = function (word1, word2) {
  const n = word1.length;
  const m = word2.length;
  const dp = [...Array(n + 1)].map(() => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) dp[i][0] = i;
  for (let j = 1; j <= m; j++) dp[0][j] = j;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min.call(dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }
  return dp[n][m];
};