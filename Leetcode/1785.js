/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
  let sum = nums.reduce((p, c) => p + c);
  let counts = 0;
  sum = Math.abs(goal - sum);
  while (sum !== 0) {
    if (sum <= limit) return ++counts;
    else {
      counts += Math.floor(sum / limit);
      sum = sum % limit;
    }
  }
  return counts;
};