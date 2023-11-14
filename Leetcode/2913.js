/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  const mod = Math.pow(10, 9) + 7, n = nums.length, map = new Map();
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = i; j < n; ++j) {
      map.set(nums[j], map.get(nums[j]) ? map.get(nums[j]) + 1 : 1);
      res += map.size * map.size;
      res %= mod;
    }
    map.clear();
  }
  return res;
};