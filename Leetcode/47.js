var permuteUnique = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    let result = []
    let path = []

    function backtracing(used) {
        if (path.length === nums.length) {
            result.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            if (!used[i]) {
                used[i] = true
                path.push(nums[i])
                backtracing(used)
                path.pop()
                used[i] = false
            }


        }
    }
    backtracing([])
    return result
};





/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var permuteUnique = function (nums, target) {
    const path = [], res = [], n = nums.length;
    nums.sort((a, b) => a - b);
    const dfs = function (used) {
        if (path.length === n) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < n; i++) {
            //      used[i - 1] == nums[i - 1]使用过
            //      used[i - 1] == nums[i - 1]使用过
            if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) continue;
            if (!used[i]) {
                used[i] = true;
                path.push(nums[i]);
                dfs(used);
                used[i] = false;
                path.pop();
            }
        }
    }
    dfs([]);
    return res;
};