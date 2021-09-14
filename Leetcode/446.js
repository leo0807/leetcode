/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
    const n = nums.length;
    let res = 0;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        map[i] = new Map();
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            const gap = nums[i] - nums[j];
            const count = map[j].get(gap) || 0;
            res += count;
            map[i].set(gap, (map[i].get(gap) || 0) + count + 1);
        }
    }
    return res;
};