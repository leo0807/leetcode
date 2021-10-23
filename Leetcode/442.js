/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n;) {
        const index = nums[i] - 1;
        if (nums[index] !== nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
        } else i++;
    }
    const res = [];
    for (let i = 0; i < n; i++) {
        if (i + 1 !== nums[i]) res.push(nums[i]);
    }
    return res;
};