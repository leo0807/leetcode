/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
  let counts = 0;
  while (Math.min(num1, num2) > 0) {
    if (num1 < num2) {
      [num1, num2] = [num2, num1];
    }
    counts += Math.floor(num1 / num2);
    num1 %= num2;
  }
  return counts;

};