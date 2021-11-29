/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 0; j < i; j++) {
      triangle[i - 1][j] +=
        Math.min(triangle[i][j], triangle[i][j + 1]);
    }
  }
  return triangle[0][0];
};
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(n).fill(0);
  dp[0] = triangle[0][0];
  for (let i = 1; i < n; i++) {
    dp[i] = dp[i - 1] + triangle[i][i];
    for (let j = i - 1; j > 0; j--) {
      dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j];
    }
    dp[0] += triangle[i][0];
  }
  return Math.min.apply(null, dp);
};