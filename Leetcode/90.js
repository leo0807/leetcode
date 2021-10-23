/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    // sort the numbers to handle duplicates
    nums.sort((a, b) => a - b);
    const subsets = [];
    subsets.push([]);
    let startIndex = 0,
        endIndex = 0;
    for (i = 0; i < nums.length; i++) {
        startIndex = 0;

        if (i > 0 && nums[i] === nums[i - 1]) {
            startIndex = endIndex + 1;
        }
        endIndex = subsets.length - 1;
        for (j = startIndex; j < endIndex + 1; j++) {
            const set1 = subsets[j].slice(0);
            set1.push(nums[i]);
            subsets.push(set1);
        }
    }
    return subsets;
}