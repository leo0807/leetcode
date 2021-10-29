function FirstNotRepeatingChar(str) {
    // write code here
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) == str.lastIndexOf(str[i])) {
            return str.indexOf(str[i])
        }
    }
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            let resLeft = mid, resRight = mid;
            while (nums[resLeft] === target) {
                resLeft--;
            }
            while (nums[resRight] === target) {
                resRight++;
            }
            return [++resLeft, --resRight];
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return [-1, -1];
};