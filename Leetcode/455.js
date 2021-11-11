/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
// 贪心算法
// 小饼干给小胃口，或者大饼干给大胃口
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let index = 0, res = 0, sn = s.length, gn = g.length;
  for (let i = 0; i < sn; i++) {
    if (index >= gn) break;
    if (g[index] <= s[i]) {
      res++;
      index++
    }
  }
  return res;
};