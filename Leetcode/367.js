/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1, right = num;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (num / mid === mid) return true;
    else if (num / mid > mid) left = mid + 1;
    else right = mid - 1;
  }
  return false;
};