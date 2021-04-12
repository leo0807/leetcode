/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    buildHeap(nums);
    let n = nums.length;
    for (let i = nums.length - 1; i > nums.length - k; i--) {
        swap(nums, i, 0);
        n--;
        heapify(nums, 0, n);
    }
    return nums[0];
};
function buildHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        heapify(arr, i, n);
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function heapify(arr, i, n) {
    let left = 2 * i + 1,
        right = 2 * i + 2,
        max = i;
    if (left < n && arr[max] < arr[left]) {
        max = left;
    }
    if (right < n && arr[max] < arr[right]) {
        max = right;
    }
    if (max !== i) {
        swap(arr, i, max);
        heapify(arr, max, n);
    }
}