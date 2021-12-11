/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let counter = 0, n = nums.length;
  let tmp = 0;
  for (let start = 0; start < n; start++) {
    tmp = 0;
    for (let end = start; end >= 0; end--) {
      tmp += nums[end];
      if (tmp === k) {
        counter++;
      }
    }
  }
  return counter;
};