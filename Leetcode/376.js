/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心，自定义波峰波谷，进行统计
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  let res = 1, prevDiff = 0, currDiff = 0;
  for (let i = 0; i < n - 1; i++) {
    currDiff = nums[i + 1] - nums[i];
    if ((currDiff > 0 && prevDiff <= 0) || (currDiff < 0 && prevDiff >= 0)) {
      res++;
      prevDiff = currDiff;
    }
  }
  return res;
};