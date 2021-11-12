/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  /**
   * 贪心算法
   * 1. 第一天没有利润，从第二天算起
   * 2. 收集正利润区间，即是最大利润
   */
  const n = prices.length;
  let res = 0;
  for (let i = 1; i < n; i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }
  return res;
};
// 动态规划
var maxProfit2 = function (prices) {
  const n = prices.length;
  const dp = new Array(n, () => new Array(2).fill(0));
  /**
   * dp[i][0] 不持有股票的利润
   * dp[i][0] 持有股票的利润
   */
  dp[0][0] = -prices[0][0]; // 定义初始值为 
  for (let i = 1; i < n; i++) {
    // 第i天持股票所剩最多现金 = max(第i-1天持股票所剩现金, 第i-1天持现金-买第i天的股票)
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    // 第i天持有最多现金 = max(第i-1天持有的最多现金，第i-1天持有股票的最多现金+第i天卖出股票)
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1]);
}