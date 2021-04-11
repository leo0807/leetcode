/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let res = 0;
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i > 1; i--) {
        let left = 0, right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                res += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
};