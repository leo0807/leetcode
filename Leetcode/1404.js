/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let counts = 0, add = 0;
  for (let i = s.length - 1; i > 0; i--) {
    counts++;
    if (+s[i] + add === 1) {
      counts++;
      add = 1
    }
  }
  return counts + add;
};