var combinationSum = function (candidates, target) {
    let res = [];
    candidates.sort((a, b) => {
        return a - b;
    })
    dfs(res, [], candidates, target, 0);
    return res;
};
function dfs(results, temp, candidates, target, level) {
    if (target === 0) {
        results.push([...temp]);
        return;
    }
    for (let i = level; i < candidates.length && target - candidates[i] >= 0; i++) {
        temp.push(candidates[i]);
        dfs(results, temp, candidates, target - candidates[i], i);
        temp.pop();
    }
}
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
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
