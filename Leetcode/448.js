/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const n = nums.length, res = [];
    for (let i = 0; i < n;) {
        const index = nums[i] - 1;
        if (nums[index] !== nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
        } else {
            i++;
        }
    }

    for (let i = 0; i < n; i++) {
        if (i + 1 !== nums[i]) res.push(i + 1);
    }

    return res;
};