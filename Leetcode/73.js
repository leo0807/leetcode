/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var res = new Array();
    var row = matrix.length,
        col = matrix[0].length;
    var rowSet = new Set(),
        colSet = new Set();

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                rowSet.add(i);
                colSet.add(j);
            }
        }
    }

    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (rowSet.has(i) || colSet.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
    // return matrix;
};