/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let recursion = (path, start, n) => {
        if (n === 0 && path.length === k) {
            res.push([...path]);
        } else if (n < 0 && path.length > k) {
            return;
        } else {
            for (let i = start; i <= 9; i++) {
                path.push(i);
                recursion(path, i + 1, n - i);
                path.pop();
            }
        }
    }
    recursion([], 1, n);
    return res;
};