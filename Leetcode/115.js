
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const n = s.length;
  const m = t.length;
  const dp = [...Array(n + 1)].map(() => new Array(m + 1).fill(0));
  // dp[i][0] 表示：以i - 1为结尾的s可以随便删除元素，出现空字符串的个数。

  // 那么dp[i][0]一定都是1，因为也就是把以i - 1为结尾的s，删除所有元素，出现空字符串的个数就是1。

  // 再来看dp[0][j]，dp[0][j]：空字符串s可以随便删除元素，出现以j - 1为结尾的字符串t的个数。

  // 那么dp[0][j]一定都是0，s如论如何也变成不了t。

  // 最后就要看一个特殊位置了，即：dp[0][0] 应该是多少。

  // dp[0][0]应该是1，空字符串s，可以删除0个元素，变成空字符串t。
  for (let i = 0; i <= n; i++) dp[i][0] = 1;
  for (let i = 1; i <= m; i++) dp[0][i] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s[i - 1] === t[j - 1]) {
        // 当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成。

        // 一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。

        // 一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]。

        // 这里可能有同学不明白了，为什么还要考虑 不用s[i - 1]来匹配，都相同了指定要匹配啊。

        // 例如： s：bagg 和 t：bag ，s[3] 和 t[2]是相同的，但是字符串s也可以不用s[3]来匹配，即用s[0]s[1]s[2]组成的bag。
        dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[n][m];
};