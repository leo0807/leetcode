/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;
  const dp = [...Array(n)].map(() => new Array(3));
  // 不持有股票
  dp[0][0] = 0;
  // 持有股票
  dp[0][1] = -prices[0];
  // 冷冻期 
  dp[0][2] = 0;
  for (let i = 1; i < n; i++) {
    //第i天不持股可以从两种状态转移而来，1.第i - 1天不持股，
    // 今天仍不买股票，保持不持股状态。2.冷冻期结束了，但是今天不买股票。
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2]);
    // 第i天持股可以从两种状态转移过来， 第i - 1不持股
    // (包含昨天是冷冻期，冷冻期结束后转为不持股状态和昨天本身就不持股这两种情况)，
    // 今天买股票。2.第i - 1天持股，今天不卖出，保持持股状态。
    dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1]);
    // 只有前一天卖出股票，第i天才会处于冷冻期(此时dp[i - 1][1]为负数)
    dp[i][2] = dp[i - 1][1] + prices[i];
  }
  // 只有最后一天不持股或者前一天已经卖掉了才能有最大值
  return Math.max(dp[n - 1][0], dp[n - 1][2]);
};