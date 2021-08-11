/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let ramp = 0;
    let stack = []
    for (let i = 0, len = nums.length; i < len; i++) {
        if (stack.length === 0 || nums[i] < nums[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    for (let len = nums.length, i = len - 1; i >= 0; i--) {
        while (stack != [] && nums[i] >= nums[stack[stack.length - 1]]) {
            ramp = Math.max(ramp, i - stack.pop());
        }
    }
    return ramp;
};


