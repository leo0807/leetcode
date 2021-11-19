/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 给定一个正整数、负整数和 0 组成的 N × M 矩阵，编写代码找出元素总和最大的子矩阵。

// 返回一个数组[r1, c1, r2, c2]，其中 r1, c1 分别代表子矩阵左上角的行号和列号，r2, c2 分别代表右下角的行号和列号。若有多个满足条件的子矩阵，返回任意一个均可。

// 注意：本题相对书上原题稍作改动

// 示例：

// 输入：
// [
//   [-1, 0],
//   [0, -1]
// ]
// 输出：[0, 1, 0, 1]
// 解释：输入中标粗的元素即为输出所表示的矩阵

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/max-submatrix-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 复杂度O(n^3)
// 通过子矩阵，线找到当前行
var getMaxMatrix = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  let max = matrix[0][0];
  const res = new Array(4).fill(0);

  // 构成前缀和
  const preSum = [...Array(row + 1)].map(() => new Array(col).fill(0));
  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < col; j++) {
      preSum[i][j] = preSum[i - 1][j] + matrix[i - 1][j];
    }
  }
  // 合并行
  for (let top = 0; top < row; top++) {
    for (let bottom = top; bottom < row; bottom++) {
      // 构造一维数组
      const arr = new Array(col).fill(0);
      for (let i = 0; i < col; i++) {
        arr[i] = preSum[bottom + 1][i] - preSum[top][i];
      }
      // 最大子数组问题
      let start = 0, sum = arr[0];
      for (let i = 1; i < col; i++) {
        if (sum > 0) {
          sum += arr[i];
        } else {
          sum = arr[i];
          start = i;
        }
        if (sum > max) {
          max = sum;
          res[0] = top;
          res[1] = start;
          res[2] = bottom;
          res[3] = i;
        }
      }
    }
  }
  return res;
};