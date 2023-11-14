/**
 * @param {number[][]} matrix
 * One Dimension Solution
 */
var NumMatrix = function (matrix) {
  const row = matrix.length;
  if (row > 0) {
    const col = matrix[0].length;
    this.sums = new Array(row).fill(0).map(() => new Array(col + 1).fill(0));
    for (let i = 0; i < row; ++i) {
      for (let j = 0; j < col; ++j) {
        this.sums[i][j + 1] = this.sums[i][j] + matrix[i][j];
      }
    }
  }

};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;
  for (let i = row1; i <= row2; ++i) {
    sum += this.sums[i][col2 + 1] - this.sums[i][col1];
  }
  return sum;
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */