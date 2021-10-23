/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n;) {
        const index = nums[i];
        if (nums[index] !== nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (i !== nums[i]) return i;
    }
    return n;
};