/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = -Infinity, count = 0;
    for (const i of nums) {
        if (i === 1) count++;
        else count = 0;
        max = Math.max(max, count);
    }
    return max;
};