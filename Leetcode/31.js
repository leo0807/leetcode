/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    if (nums.length < 2) return nums;
    let sign = false;
    let r = nums.length - 1, left = -1, right;
    for (let i = r; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            // 2, 6, 3, 5, 4, 1 这个排列， 我们想要找到下一个刚好比他大的排列，
            // 于是可以从后往前看 我们先看后两位 4, 1 能否组成更大的排列，
            // 答案是不可以，同理 5, 4, 1也不可以 直到3, 5, 4, 1这个排列，因为 3 < 5，
            // 我们可以通过重新排列这一段数字，来得到下一个排列 因为我们需要使得新的排列尽量小，
            // 所以我们从后往前找第一个比3更大的数字，发现是4 然后，我们调换3和4的位置，
            // 得到4, 5, 3, 1这个数列 因为我们需要使得新生成的数列尽量小，
            // 于是我们可以对5, 3, 1进行排序，可以发现在这个算法中，
            // 我们得到的末尾数字一定是倒序排列的，于是我们只需要把它反转即可
            // 最终，我们得到了4, 1, 3, 5这个数列 完整的数列则是2, 6, 4, 1, 3, 5
            if (nums[i] > nums[j]) {
                if (j > left) {
                    left = j, right = i;
                }
                sign = true;
                break;
            }
        }
    }
    if (!sign) nums.sort((a, b) => a - b);
    else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        quickSort(nums, left + 1, r);
    }
};

function quickSort(arr, low, high) {
    // console.log(arr);
    if (low < high) {
        let index = getIndex(arr, low, high);
        quickSort(arr, low, index - 1);
        quickSort(arr, index + 1, high);
    }
}

function getIndex(arr, low, high) {
    let tmp = arr[low];
    while (low < high) {
        while (low < high && arr[high] >= tmp) {
            high--;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= tmp) {
            low++;
        }
        arr[high] = arr[low];
    }
    arr[low] = tmp;
    return low;
}