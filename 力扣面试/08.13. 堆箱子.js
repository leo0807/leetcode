// 堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。

// 输入使用数组[wi, di, hi]表示每个箱子。

// 示例1:

// 输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
// 输出：6
// 示例2:

// 输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
// 输出：10

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/pile-box-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} box
 * @return {number}
 * 将box按照宽，深，高的优先级排序，再进行n^2的dp就可以了。dp[i]表示以箱子i为最底下的箱子时能堆的最大高度。
 */
var pileBox = function (box) {
  box.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : (
    a[1] !== b[1] ? a[1] - b[1] : a[2] - b[2]
  )));
  const n = box.length;
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    dp[i] = box[i][2];
    for (let j = 0; j < i; j++) {
      if (box[i][0] > box[j][0] && box[i][1] > box[j][1] && box[i][2] > box[j][2]) {
        dp[i] = Math.max(dp[i], dp[j] + box[i][2]);
      }
    }
  }
  return Math.max.apply(null, dp);
};