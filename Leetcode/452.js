/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let res = 0;
  const merge = [], n = points.length;
  for (let i = 0; i < n; i++) {
    !merge.length && merge.push(points[i]);
    if (merge[merge.length - 1][1] < points[i][0]) {
      merge.push(points[i]);
    } else {
      merge[merge.length - 1][1] =
        Math.min(merge[merge.length - 1][1], points[i][1]);
    }
  }
  return merge.length;
};