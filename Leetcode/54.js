/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    let left = 0, right = col - 1, top = 0, bottom = row - 1, res = [];
    while (true) {

        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        if (top > bottom) break;

        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (left > right) break;

        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        if (top > bottom) break;

        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
        if (left > right) break;

    }
    return res;
};