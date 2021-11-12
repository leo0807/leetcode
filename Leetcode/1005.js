/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 贪心
var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => a - b);
  let res = 0, min = Infinity;
  for (let i of nums) {
    if ((i < 0) && (k > 0)) {
      k--;
      res += -i;
      min = Math.min(min, -i);
    }
    else if ((i >= 0) && (k > 0) && (k & 1 === 1)) {
      min = Math.min(min, i);
      res += i - 2 * min;
      k = 0;
    } else {
      res += i;
    }
  }
  if (k & 1) res -= 2 * min;
  return res;
};

var largestSumAfterKNegations = function (nums, k) {
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a)
  })
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0 && k > 0) {
      nums[i] *= -1
      k--
    }
  }

  if (k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1
  }
  k = 0

  return nums.reduce((a, b) => {
    return a + b
  })
};