/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    k %= n;
    reverseArr(nums, 0, n - 1);
    reverseArr(nums, 0, k - 1);
    reverseArr(nums, k, n - 1);
};
function reverseArr(arr, begin, end) {
    while (begin < end) {
        [arr[begin++], arr[end--]] = [arr[end], arr[begin]];
    }

}

var rotate = function (nums, k) {
    const n = nums.length;
    k %= n;
    for (let i = 0; i < (n - k); i++) {
        nums.push(nums.shift());
    }
    return nums;
};