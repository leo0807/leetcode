/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
  function notGreaterThan(num) {
    let index = 0, res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
      if (nums[i] <= num) {
        index++;
      } else {
        index = 0;
      }
      res += index;
    }
    return res;
  }
  return notGreaterThan(right) - notGreaterThan(left - 1);
};

var numSubarrayBoundedMax = function (nums, left, right) {
  let start = 0, end = -1, res = 0;
  for (let i = 0, n = nums.length; i < n; i++) {
    if (nums[i] >= left && nums[i] <= right) end = i;
    if (nums[i] > right) start = i + 1, end = -1;
    if (end !== -1) res += (end - start + 1);
  }
  return res;
};