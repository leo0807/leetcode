/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
  let counts = 0;
  while (target !== 1) {
    if (maxDoubles && ((target & 1) === 0)) {
      target >>= 1;
      maxDoubles--;
    } else if (maxDoubles === 0) {
      return counts + target - 1;
    } else {
      target--;
    }
    counts++;
  }
  return counts;
};