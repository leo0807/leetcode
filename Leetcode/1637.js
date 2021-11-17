/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let max = -Infinity, n = points.length;
  for (let i = 1; i < n; i++) {
    max = Math.max(max, points[i][0] - points[i - 1][0]);
  }
  return max;
};