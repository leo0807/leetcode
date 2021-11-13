/**
 * @param {number[]} cost
 * @return {number}
 * 1. dp[i]的定义：到达第i个台阶所花费的最少体力为dp[i]
 * 2. 可以有两个途径得到dp[i]，一个是dp[i-1] 一个是dp[i-2]。
 * 
 */
var minCostClimbingStairs = function (cost) {
  if (cost.length < 2) return cost[0];
  const n = cost.length;
  const dp = new Array(n).fill(0);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(cost[i] + dp[i - 1], cost[i] + dp[i - 2]);
  }
  return Math.min(dp[n - 1], dp[n - 2]);
};