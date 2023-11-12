/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function (nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 1, j = 1; i < n - 1; i = j + 1) {
    j = i;
    while (j + 1 < n - 1 && nums[i] === nums[j + 1]) ++j;
    if (nums[i] > nums[i - 1] && nums[j] > nums[j + 1] || nums[i] < nums[i - 1] && nums[j] < nums[j + 1]) ++res;
  }
  return res;
};