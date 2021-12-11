/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {

  const map = new Map();

  for (const i of arr) {
    const key = ((i % k) + k) % k;
    map.set(key, (map.get(key) | 0) + 1);
  }
  for (let key of map.keys()) {
    if (key === 0 || (key === k - key)) {
      if (map.get(key) & 1) {
        return false;
      }
    } else {
      if (map.has(k - key)) {
        const m = map.get(key);
        const n = map.get(k - key);
        if (m !== n) return false;
      } else {
        return false;
      }
    }
  }
  return true;
};