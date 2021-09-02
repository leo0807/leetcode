/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix1 = function (matrix, target) {
    const row = matrix.length;
    const col = matrix[0].length;
    for (let i = 0; i < row; i++) {
        if (matrix[i][col - 1] < target) {
            continue
        } else if (matrix[i][col - 1] === target) {
            return true;
        } else {
            let left = 0, right = col - 1;
            while (left <= right) {
                let mid = Math.floor((left + right) / 2);
                if (matrix[i][mid] === target) {
                    return true;
                } else if (matrix[i][mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }
    return false;
};
var searchMatrix2 = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] < target) {
            row++;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            return true;
        }
    }
    return false;
};