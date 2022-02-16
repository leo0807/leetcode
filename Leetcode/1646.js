/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
  if (n === 0) return 0;
  const arr = new Array(n + 2).fill(0);
  arr[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    arr[i] = arr[i >> 1] + arr[(i >> 1) + 1] * (i % 2)
  }
  return Math.max.apply(null, arr);
};