/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  // 首元素添加一位，方式p的长度只有1的情况
  p = '^' + p;
  let counter = 1, res = 0;
  const map = {};
  for (let i = 1, n = p.length; i < n; i++) {
    // 前缀和，计算连续自诩自负ASCII码差为1的字符串
    if ((p.charCodeAt(i) - p.charCodeAt(i - 1) === 1)
      || (p.charCodeAt(i) - p.charCodeAt(i - 1) === -25)) {
      counter++;
    } else {
      counter = 1;
    }
    // 使用HashMap记录子字符串的尾元素的最大值
    // 如cabc
    // 以c为结尾的元素为1和abc为3，取3
    map[p[i]] = Math.max(map[p[i]] | 0, counter);
  }
  for (const val of Object.values(map)) {
    res += val;
  }
  return res;
};