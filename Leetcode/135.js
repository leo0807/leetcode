/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candy = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candy[i] = Math.max(candy[i + 1] + 1, candy[i]);
    }
  }
  return candy.reduce((prev, curr) => prev + curr);
};