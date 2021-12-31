/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var subarraySum = function (nums, k) {
  let count = 0, map = new Map(), pre = 0;
  // 初始化
  map.set(0, 1)
  for (const i of nums) {

    pre += i;
    if (map.has(pre - k)) {
      count += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1)
    }
  }
  return count;
};