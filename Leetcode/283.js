/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0, n = nums.length, right;
  while (left < n) {
    if (nums[left] === 0) {
      right = left + 1;
      while (right < n && nums[right] === 0) right++;
      if (right < n) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    left++;
  }
  return nums;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0, right = 0, n = nums.length;
  for (left = 0; left < n; left++) {
    if (nums[left] !== 0) {
      nums[right++] = nums[left];
    }
  }
  while (right < n) {
    nums[right++] = 0;
  }
};