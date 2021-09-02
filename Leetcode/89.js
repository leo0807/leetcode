var numTrees = function (n) {
    return factorial(n * 2) / (factorial(n + 1) * factorial(n));
};
function factorial(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}

/**
 * Method 2
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    const count = Math.pow(2, n);
    const res = [], i = 0;
    for (let i = 0; i < count; i++) {
        res[i] = i ^ (i >> 1);
    }
    return res;
};