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


/**
 * @param {number} n
 * @return {number}
 * 贪心算法
 * 倒序遍历，利用前一个值
 */
var monotoneIncreasingDigits = function (n) {
  n = n.toString().split('').map(Number);
  let flag = n.length;
  for (let i = n.length - 1; i > 0; i--) {
    if (n[i - 1] > n[i]) {
      flag = i;
      n[i - 1]--;
      n[i] = 9;
    }
  }
  for (let i = flag; i < n.length; i++) {
    n[i] = 9;
  }
  return Number(n.join(''));
};