/**
 * @param {number[]} nums
 * @return {number}
 * 1. 如果移动下标等于当前覆盖最大距离下标， 需要再走一步（即res++），因为最后一步一定是可以到的终点
 */
var jump = function (nums) {
  let currDis = 0, nextDis = 0, res = 0;
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    nextDis = Math.max(nums[i] + i, nextDis);
    if (i === currDis) {
      currDis = nextDis;
      res++;
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const n = nums.length;
  const dp = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    let res = Infinity;
    for (let j = 0; j < i; j++) {
      if (nums[j] >= i - j) {
        res = Math.min(res, dp[j] + 1);
      }
    }
    dp[i] = res;
  }
  return dp[n - 1];
};