/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    const helper = function (nums, left, right) {
        if (left >= right) return true;
        let i = left;
        while (nums[i] < nums[right]) i++;
        let j = i;
        while (nums[i] > nums[right]) i++;
        return i === right && helper(nums, left, j - 1) && helper(nums, j, right - 1);
    };
    return helper(postorder, 0, postorder.length - 1);
};