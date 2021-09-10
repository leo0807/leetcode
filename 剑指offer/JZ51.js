/**
 * @param {number[]} nums
 * @return {number}
 */

// 分治法 归并排序
var reversePairs = function (nums) {
    const n = nums.length;
    if (n < 2) return 0;
    const copyArr = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        copyArr[i] = nums[i];
    }
    // 复制一个数组，使得整个程序的空间复杂度保持在n
    // 不会因递归而增加
    const tmp = new Array(n).fill(0);
    return countReversePairs(copyArr, 0, n - 1, tmp);
};
const countReversePairs = function (nums, left, right, arr) {
    if (left === right) return 0;
    const mid = (right + left) >> 1;
    const leftPairs = countReversePairs(nums, left, mid, arr);
    const rightPairs = countReversePairs(nums, mid + 1, right, arr);
    // nums[mid] <= nums[mid + 1]
    // 说明此时两边均为有序，不存在逆序对，只计算两个子序列中各自的逆序对数量即可
    if (nums[mid] <= nums[mid + 1]) return leftPairs + rightPairs;
    const crossPairs = mergeAndCount(nums, left, mid, right, arr);
    return leftPairs + crossPairs + rightPairs;
}

const mergeAndCount = function (nums, left, mid, right, arr) {
    for (let i = left; i <= right; i++) {
        arr[i] = nums[i];
    }
    let i = left, j = mid + 1, count = 0;
    for (let k = left; k <= right; k++) {
        if (i === mid + 1) {
            nums[k] = arr[j];
            j++;
        } else if (j === right + 1) {
            nums[k] = arr[i];
            i++;
            // 等号是为了保持归并排序的稳定性
        } else if (arr[i] <= arr[j]) {
            nums[k] = arr[i];
            i++;
        } else {
            // 存在逆序对情况
            nums[k] = arr[j];
            j++;
            count += (mid - i + 1);
        }
    }
    return count;
}