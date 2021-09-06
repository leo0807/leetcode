/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const n = nums.length, stack = [];
    let res = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length && nums[i % n] >= stack[stack.length - 1]) {
            stack.pop();
        }
        res[i % n] = stack.length ? stack[stack.length - 1] : -1
        stack.push(nums[i % n]);
    }
    return res;
};
