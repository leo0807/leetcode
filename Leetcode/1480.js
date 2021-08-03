/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let tmp = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        nums[i] = nums[i] + tmp;
        tmp = nums[i];
    }
    return nums;
};