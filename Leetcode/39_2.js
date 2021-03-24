/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let dfs = function (index, n, arr) {
        if (n === 0) {
            res.push(arr);
            return;
        }

        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] <= n) {
                dfs(i, n - candidates[i], [...arr, candidates[i]]);
            }
        }
        return;
    }
    dfs(0, target, []);
    return res;
};
