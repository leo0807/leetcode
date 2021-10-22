/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (!nums[i]) continue;
        let direction = nums[i] > 0;
        //         快慢指针，当快指针追上慢指针，且满足条件时，则直接返回true
        let slow = i, fast = i;
        while (true) {
            slow = findNextIndex(nums, slow, direction);
            fast = findNextIndex(nums, fast, direction);
            if (fast !== -1) {
                //                 如果快指针不违反规则，则再次执行
                fast = findNextIndex(nums, fast, direction);
            }
            if (slow === -1 || fast === -1 || slow === fast) break;
        }
        if (slow !== -1 && slow === fast) return true;
    }
    return false;
};

function findNextIndex(arr, currentIndex, isForward) {
    direction = arr[currentIndex] >= 0;

    if (isForward !== direction) {
        return -1; // change in direction, return -1
    }

    nextIndex = (currentIndex + arr[currentIndex]) % arr.length;
    if (nextIndex < 0) {
        nextIndex += arr.length; // wrap around for negative numbers
    }

    // one element cycle, return -1
    if (nextIndex === currentIndex) {
        nextIndex = -1;
    }

    return nextIndex;
}