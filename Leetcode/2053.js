/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const map = {};
  for (const i of arr) {
    if (map[i]) map[i]++;
    else map[i] = 1;
  }
  let i = 0;
  for (const key of Object.keys(map)) {
    if (map[key] === 1) i++;
    if (i === k) return key;
  }
  return "";
};