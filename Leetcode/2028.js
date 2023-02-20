/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  const len = rolls.length;

  let missVal = (len + n) * mean - rolls.reduce((prev, curr) => prev + curr);
  let divender = Math.floor(missVal / n);
  let remainder = missVal % n;
  if ((divender >= 6 && remainder > 0) || divender < 1 || remainder < 0) return [];
  console.log(divender, remainder)
  const res = [];
  while (remainder-- > 0) {
    if (divender + 1 > 6) return [];
    res.push(divender + 1);
    n--;
  }
  while (n-- > 0) {
    if (divender > 6) return [];
    res.push(divender);
  }
  return res;
};