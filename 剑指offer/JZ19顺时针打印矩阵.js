
function printMatrix(matrix) {
    // write code here
    let res = [];
    if (!matrix.length) return res;
    let row = matrix.length - 1;
    let col = matrix[0].length - 1;

    //     define directions
    let left = 0,
        right = col,
        up = 0,
        down = row;

    while (true) {
        if (left > right) break;
        for (let i = left; i <= right; i++) {
            res.push(matrix[up][i]);
        }
        up++;
        if (up > down) break;
        for (let i = up; i <= down; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        if (left > right) break;
        for (let i = right; i >= left; i--) {
            res.push(matrix[down][i]);
        }
        down--;
        if (up > down) break;
        for (let i = down; i >= up; i--) {
            res.push(matrix[i][left]);
        }
        left++;
        if (left > down) break;
    }
    return res;
}
module.exports = {
    printMatrix: printMatrix
};