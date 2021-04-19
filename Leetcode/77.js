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