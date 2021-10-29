function permute(num) {
    // write code here
    let res = [];
    dfs(res, num, 0);
    return res;
}
function dfs(res, num, idx) {
    if (idx === num.length - 1) { res.push(num); return; };
    for (let i = idx; i < num.length; i++) {
        [num[i], num[idx]] = [num[idx], num[i]];
        dfs(res, num, idx + 1);
        [num[idx], num[i]] = [num[i], num[idx]];
    }
}


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute2 = function (nums) {
    let res = [];
    const recursion = (path, set) => {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (!set.has(i)) {
                path.push(nums[i]);
                set.add(i);
                recursion(path, set);
                path.pop();
                set.delete(i);
            }
        }
    }
    recursion([], new Set());
    return res;
};