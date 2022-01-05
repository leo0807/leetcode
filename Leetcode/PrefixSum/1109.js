/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// 暴力模拟法，可AC
var corpFlightBookings = function (bookings, n) {
  const arr = new Array(n).fill(0);
  for (let [i, j, k] of bookings) {
    while (i <= j) {
      arr[i - 1] += k;
      i++;
    }
  }
  return arr;
};

// 前缀和方法
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const arr = new Array(n).fill(0);
  for (let [i, j, k] of bookings) {
    arr[i - 1] += k;
    if (j < n) arr[j] -= k;
  }
  for (let i = 1; i < n; i++) {
    arr[i] += arr[i - 1]
  }
  return arr;
};