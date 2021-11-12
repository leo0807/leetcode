/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 贪心算法，取最大步长
var canJump = function (nums) {
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, nums[i] + i);
    if (cover >= nums.length - 1) return true;
  }
  return false;
};