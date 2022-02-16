/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
  if (words1.length > words2.length) {
    [words1, words2] = [words2, words1];
  }
  const map = {};
  for (const i of words1) {
    if (map[i]) map[i]++;
    else map[i] = 1;
  }
  for (const i of words2) {
    if (map[i] < 2) {
      map[i]--;
    }
  }
  let count = 0;
  for (const key of Object.keys(map)) {
    if (map[key] === 0) {
      count++;
    }
  }
  return count;
};