/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const recursion = (path, start) => {
        if (path.length === k) {
            res.push([...path]);
            return;
        }
        for (let i = start + 1; i <= n; i++) {
            path.push(i);
            recursion(path, i);
            path.pop();
        }
    }
    recursion([], 0);
    return res;
};

// 剪枝优化
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const res = [];
    const backtrack = function (path, currIndex) {
        if (path.length === k) {
            res.push(Array.from(path));
            return;
        }
        for (let i = currIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtrack(path, i + 1);
            path.pop();
        }
    }
    backtrack([], 1);
    return res;
};