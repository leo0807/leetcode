/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int一维数组 
 * @return int
 */
function maxSubArrayLength(nums) {
    // write code here
    let length = nums.length;
    if (!length) return 0;
    let left = new Array(length),
        right = new Array(length);
    left[0] = 1;
    right[0] = 1;
    let res = 0;
    for (let i = 1; i < length; i++) {
        if (nums[i] > nums[i - 1]) {
            left[i] = left[i - 1] + 1;
        } else {
            left[i] = 1;
        }
    }
    for (let i = length - 1; i >= 0; i--) {
        right[i] = nums[i] < nums[i + 1] ? right[i + 1] + 1 : 1;
    }
    for (let i = 1; i < length - 1; i++) {
        if (nums[i - 1] < nums[i + 1]) {
            let sum = left[i - 1] + right[i + 1];
            res = Math.max(res, sum);
        }
    }
    return res + 1;
}
module.exports = {
    maxSubArrayLength: maxSubArrayLength
};