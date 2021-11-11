/**
 * @param {number[]} nums
 * @return {number}
 */

// 贪心算法
var maxSubArray = function (nums) {
  const n = nums.length;
  let res = -Infinity;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += nums[i];
    res = Math.max(res, sum);
    if (sum < 0) sum = 0;
  }
  return res;
};

// DP
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  let res = dp[0] = nums[0];
  for (let i = 1; i < n; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    res = Math.max(res, dp[i]);
  }
  return res;
}