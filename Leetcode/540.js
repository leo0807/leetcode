/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        // 因为只要第一次出现的，所只需返回nums[left]
        // 所以不需要等号
        let mid = left + Math.floor((right - left) / 2);
        // 因为只出现两次，所以如果mid与mid+1元素不想等的情况下，则
        // 只出现一次的元素在前面
        if (mid & 1) mid--;
        if (nums[mid] !== nums[mid + 1]) right = mid - 1;
        else left = mid + 2;
    }
    return nums[left];
};