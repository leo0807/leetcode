/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let i = 0, j = 0;
  let star = -1;
  let k = 0;

  while (i < s.length) {
    if (s[i] === p[j] || p[j] === '?') {
      i++;
      j++;
      continue;
    }

    if (p[j] === '*') {
      star = j++;
      k = i;
      continue;
    }

    // 如果失配了，回溯到 k + 1，即让 * 再多吞噬一个字符。
    if (star !== -1) {
      i = ++k;
      j = star + 1;
      continue;
    }
    return false;
  }
  while (j < p.length && p[j] === '*') j++;
  return j === p.length;
};