function hasPath(matrix, rows, cols, path) {
    // write code here
    if (!matrix || !rows || !cols || rows * cols < path.length || path.length == 0) {
        return false;
    }
    var copy = matrix.split('');
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (findWay(matrix, copy, rows, cols, i, j, path, 0)) {
                return true
            }
        }
    }
    return false;
}
function findWay(matrix, copy, rows, cols, i, j, path, k) {
    let index = cols * i + j;
    if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[index] !== path[k] || copy[index] == true) {
        return false;
    }
    if (k == path.length - 1) {
        return true;
    }
    copy[index] = true;
    if (findWay(matrix, copy, rows, cols, i + 1, j, path, k + 1) ||
        findWay(matrix, copy, rows, cols, i - 1, j, path, k + 1) ||
        findWay(matrix, copy, rows, cols, i, j + 1, path, k + 1) ||
        findWay(matrix, copy, rows, cols, i, j - 1, path, k + 1)) {
        return true;
    }
    copy[index] = false;
    return false;
}
module.exports = {
    hasPath: hasPath
};