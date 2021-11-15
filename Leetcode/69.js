/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = x;
  if (right <= 1) return x;
  while (left <= right) {
    const mid = left + ~~((right - left) / 2);
    if (mid * mid === x) return mid;
    else if (mid > x / mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return right;
};
/**
 * @param {number} x
 * @return {number}
 * 牛顿迭代法 
 */
var mySqrt = function (x) {
  if (x <= 1) return x;
  let r = x;
  while (r > x / r) {
    r = (r + x / r) / 2 >> 0;
  }
  return r >> 0;
};