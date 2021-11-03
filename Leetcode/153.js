/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let left = 0, right = nums.length - 1;
    if (nums[left] < nums[right]) return nums[left];
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid + 1] < nums[mid]) {
            return nums[mid + 1];
        } else if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }
        if (nums[0] < nums[mid]) left = mid + 1;
        else right = mid
    }
    return nums[left];
};