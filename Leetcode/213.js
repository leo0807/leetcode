/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const n = nums.length;
  if (n < 3) return Math.max.apply(null, nums);
  const dp1 = new Array(n).fill(0),
    dp2 = new Array(n + 1).fill(0);
  for (let i = 0; i < n - 1; i++) {
    dp1[i + 2] = Math.max(dp1[i + 1], dp1[i] + nums[i]);
  }
  for (let i = 1; i < n; i++) {
    dp2[i + 2] = Math.max(dp2[i + 1], dp2[i] + nums[i]);
  }
  return Math.max(dp1[n], dp2[n + 1]);
};