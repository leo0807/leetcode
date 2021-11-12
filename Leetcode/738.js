/**
 * @param {number} n
 * @return {number}
 */
// 暴力法 TLE
var monotoneIncreasingDigits = function (n) {
  for (let i = n; i >= 0; i--) {
    if (checkNum(i)) return i;
  }
  return 0;
};

function checkNum(num) {
  let max = 10;
  while (num) {
    let tmp = num % 10;
    if (max >= tmp) max = tmp;
    else return false;
    num = num / 10 >> 0;
  }
  return true;
}