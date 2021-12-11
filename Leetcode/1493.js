/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (nums.length === 0) return 0;
  const n = nums.length;
  const dp = [...Array(n)].map(() => new Array(2).fill(0));
  // 以i为结尾的没有删除的最长长度
  dp[0][0] = nums[0];
  dp[0][1] = 0;
  let res = 0;
  for (let i = 1; i < n; i++) {
    if (nums[i] === 1) {
      dp[i][0] = dp[i - 1][0] + 1;
      dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1]) + 1;
    } else {
      // 删除当前节点
      dp[i][0] = 0;
      dp[i][1] = dp[i - 1][0];
    }
    res = Math.max.apply(null, [res, dp[i][0], dp[i][1]]);
  }
  return Math.min(res, nums.length - 1);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  if (!nums.includes(0)) return nums.length - 1;
  nums = nums.join('').split('0');
  let res = 0
  for (let i = 1, n = nums.length; i < n; i++) {
    res = Math.max(res, nums[i - 1].length + nums[i].length);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0, n = nums.length;
  let counts = 0, res = 0;
  for (let right = left; right < n; right++) {
    if (nums[right] === 0) {
      counts++;
    }
    while (counts > 1) {
      if (nums[left] === 0) {
        counts--;
      }
      left++;
    }
    res = Math.max(res, right - left + 1);
  }
  return res - 1;
};