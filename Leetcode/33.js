/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (target === nums[mid]) return mid;
        if (nums[mid] < nums[right]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] > target && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};