/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let res = new Array(T.length).fill(0);
    let stack = [];

    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[i] > T[stack[stack.length - 1]]) {
            const index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures2 = function (temperatures) {
    let res = [], stack = [], n = temperatures.length;
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
            stack.pop();
        }
        res[i] = stack.length === 0 ? 0 : (stack[stack.length - 1] - i);
        stack.push(i);
    }
    return res;
};