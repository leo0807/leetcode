/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    heights.unshift(0);
    heights.push(0);
    const stack = [0];
    let res = 0;
    for (let i = 1; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            const top = stack[stack.length - 1];
            stack.pop();
            const height = heights[top];
            const width = i - stack[stack.length - 1] - 1;
            const area = height * width;
            res = Math.max(res, area);
        }
        stack.push(i);
    }
    return res;
};
