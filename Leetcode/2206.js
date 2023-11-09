/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  if (nums.length % 2) return false;
  const map = {}, n = nums.length;
  for (let i = 0; i < n; i++) {
    map[nums[i]] = map[nums[i]] ? map[nums[i]] + 1 : 1;
  }
  for (const key of Object.keys(map)) {
    if (map[key] % 2) return false;
  }
  return true;
};