/**
 * @param {character[][]} matrix
 * @return {number}
 */
// 暴力解法
var maximalRectangle = function (matrix) {
    const row = matrix.length;
    if (row < 1) return 0;
    const col = matrix[0].length;
    // left存储以i，j坐标为右下角的连续为1的个数，是为widt
    const left = new Array(row).fill(0).map(() => new Array(col).fill(0));
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === '1') {
                // 前一个点的连续1的个数
                left[i][j] = (j === 0 ? 0 : left[i][j - 1]) + 1;
            }
        }
    }
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === '0') continue;
            let width = left[i][j];
            let area = width;
            // 向上求高
            for (let k = i - 1; k >= 0; k--) {
                width = Math.min(left[k][j], width);
                area = Math.max(area, (i - k + 1) * width);
            }
            res = Math.max(area, res);
        }
    }
    return res;
};

// 单调栈
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    const row = matrix.length;
    if (row < 1) return 0;
    const col = matrix[0].length;
    const heights = new Array(col).fill(0);
    let res = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === '1') {
                heights[j]++;
            } else {
                heights[j] = 0
            }
        }
        res = Math.max(res, largestRectangle(heights));
    }
    return res;
};

const largestRectangle = function (heights) {
    const newHeights = [...heights]
    newHeights.unshift(0);
    newHeights.push(0);
    const stack = [0];
    let res = 0;
    for (let i = 1; i < newHeights.length; i++) {
        while (stack.length && newHeights[i] < newHeights[stack[stack.length - 1]]) {
            const h = newHeights[stack[stack.length - 1]];
            stack.pop();
            res = Math.max(res, (i - stack[stack.length - 1] - 1) * h);
        }
        stack.push(i);
    }
    return res;
}