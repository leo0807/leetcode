/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let subsets = [[]], n = nums.length;
    for (let i = 0; i < n; i++) {
        const curr = nums[i], len = subsets.length;
        for (let j = 0; j < len; j++) {
            const set = subsets[j].slice(0);
            set.push(curr);
            subsets.push(set);
        }
    }
    return subsets;
};