/**
 * @param {number} num
 * @return {number}
 */

// 数二进制1的个数，为1说明为奇数，做减1和除法两次操作，否则只做一次除法操作
// 最后的减1是为了应对不为0的数最后只需要减1即为0
var numberOfSteps = function (num) {
  let count = 0;
  while (num !== 0) {
    count += (num & 1) ? 2 : 1;
    num >>= 1;
  }
  return count === 0 ? 0 : --count;
};