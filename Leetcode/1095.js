/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function (target, mountainArr) {
  let right = mountainArr.length() - 1, left = 0;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (mountainArr.get(mid) > mountainArr.get(mid - 1)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  let max = left;
  left = 0, right = max;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (mountainArr.get(mid) < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (mountainArr.get(left) === target) {
    return left;
  }
  // 倒序
  left = max, right = mountainArr.length() - 1;
  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (mountainArr.get(mid) > target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  if (mountainArr.get(left) === target) {
    return left;
  }
  return -1;
};