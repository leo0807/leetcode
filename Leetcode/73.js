/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
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


// [[0, 1, 2, 0],
//  [3, 4, 5, 2],
//  [1, 3, 1, 5]]
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    const rowNum = matrix.length,
        colNum = matrix[0].length;
    let rowSign = false, colSign = false;
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (matrix[i][j] === 0) {
                if (i === 0) rowSign = true;
                if (j === 0) colSign = true;
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for (let i = 1; i < rowNum; i++) {
        for (let j = 1; j < colNum; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (rowSign) for (let i = 0; i < colNum; i++) matrix[0][i] = 0;
    if (colSign) for (let i = 0; i < rowNum; i++) matrix[i][0] = 0;
};