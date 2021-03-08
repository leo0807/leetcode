/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS1 = function (nums) {
    var count = 0;
    var res = 0;
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        if (i === 0 || nums[i - 1] < nums[i]) res = Math.max(res, ++count);
        else count = 1;;
    }
    return res;
};