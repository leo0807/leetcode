var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
    let low = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] !== nums[low]) {
            low++;
            nums[low] = nums[i];
        }
    }
    nums.splice(low + 1);
    console.log(nums);
    return low + 1;
};
let reduce = (arr) => {
    let map = new Map();
    let i = 0;
    for (let j = 0; j < arr.length; j++) {
        if (!map.has(arr[j])) {
            i != j && ([arr[i], arr[j]] = [arr[j], arr[i]]);
            map.set(arr[i++], true);
        }
    }
    arr.splice(i, arr.length - i);
    console.log(arr);
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
// console.log(reduce(nums));