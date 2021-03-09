function bubbleSort(arr) {
    const len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}
function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function bubble(nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - (i + 1); j++) {
            nums[j] > nums[j + 1] && swap(nums, j, j + 1);
        }
    }
}

// Optimazatin

function bubble0(nums) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        let isSorted = true;
        for (let j = 0; j < len - (i + 1); j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                isSorted = false;
            }
        }
        if (isSorted) break;
    }
}

function bubble1(nums) {
    const len = nums.length;
    let lastChangedIndex = 0;
    let border = len - 1;
    for (let i = 0; i < len; i++) {
        let isSorted = true;
        for (let j = 0; j < border; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                lastChangedIndex = j;
                isSorted = false;
            }
        }
        border = lastChangedIndex;
        if (isSorted) break;
    }
}

let tmp = [32, 4, 231, 42, 2, 6, 6, 7, 11];
// bubbleSort(tmp);
// bubble(tmp);
bubble0(tmp);
// bubble1(tmp);
console.log(tmp);