/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const n = nums.length;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) {
      [nums[nums[i]], nums[i]] =
        [nums[i], nums[nums[i]]];
    }
  }

  for (let i = 0; i < n; i++) {
    if (i !== nums[i]) return i;
  }
  return n > 0 ? n : 0;
};