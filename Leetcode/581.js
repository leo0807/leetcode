var findUnsortedSubarray = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < nums.length - 1 && nums[left] <= nums[left + 1]) left++;
    if (left === nums.length - 1) return 0;
    while (right > 0 && nums[right] >= nums[right - 1]) right--;
    if (right === 0) return nums.length;

    let min = Infinity, max = -Infinity;
    for (let i = left; i < right + 1; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
    }
    while (left > 0 && nums[left - 1] > min) left--;
    while (right < nums.length - 1 && nums[right + 1] < max) right++;
    return right - left + 1;
};

