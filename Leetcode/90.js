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


var subsetsWithDup = function (nums) {
    let result = []
    let path = []
    let sortNums = nums.sort((a, b) => {
        return a - b
    })
    function backtracing(startIndex, sortNums) {
        result.push(path.slice(0))
        if (startIndex > nums.length - 1) {
            return
        }
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue
            }
            path.push(nums[i])
            backtracing(i + 1, sortNums)
            path.pop()
        }
    }
    backtracing(0, sortNums)
    return result
};
