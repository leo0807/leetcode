/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const rowMin = [], row = matrix.length, col = matrix[0].length, res = [];
    for (let i = 0; i < row; i++) {
        rowMin.push(Math.min.call(Math, ...matrix[i]));
    }
    for (let j = 0; j < col; j++) {
        4
    }
    let colMax = matrix[0].map((item, index) => Math.max.call(Math, ...matrix.map(row => row[index])));
    for (const i of rowMin) {
        colMax.indexOf(i) > -1 && res.push(i);
    }
    return res;
};