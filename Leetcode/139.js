/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);
  dp[0] = true;
  wordDict = new Set(wordDict);
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.has(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 背包方式
*/
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill('');

  for (let i = 1; i <= n; i++) {
    const word = s.substring(0, i);
    for (const item of wordDict) {
      const len = item.length;
      if (len <= i && dp[i] + dp[i - len] + item === word) {
        dp[i] += dp[i - len] + item;
      }
    }
  }
  return dp[n] === s;
};