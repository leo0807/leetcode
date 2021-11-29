/**
 * @param {number[]} answers
 * @return {number}
 */
// ； 例如， 5出现了8次， 那么至少得2 *（5 + 1）只兔子； 如果5出现了6次呢？ 至少需要6只兔子；
// 如果5出现了3次呢？ 还是6只兔子； 当val出现了t次， 如果t %（val + 1） == 0， 需要（t /（val + 1））*（val + 1）只兔子； 如果没有整除， 则至少需要(t / (val + 1) + 1) * (val + 1)只兔子；
var numRabbits = function (answers) {
  const map = {};
  for (const i of answers) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  let res = 0;
  for (const [y, x] of Object.entries(map)) {
    res += Math.floor((x + Number(y)) / (Number(y) + 1)) * (Number(y) + 1)
  }
  return res;
};