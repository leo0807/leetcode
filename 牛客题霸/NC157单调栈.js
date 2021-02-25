/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int一维数组 
 * @return int二维数组
 */
function foundMonotoneStack(nums) {
    // write code here
    let res = [];
    const len = nums.length;
    let leftMin = -1,
        rightMin = -1;
    for (let index = 0; index < len; index++) {
        for (let left = index - 1; left >= -1; left--) {
            if (left === -1) {
                leftMin = -1;
                break;
            }
            if (nums[left] < nums[index]) {
                leftMin = left;
                break;
            }
        }
        for (let right = index + 1; right <= len; right++) {
            if (right === len) {
                rightMin = -1;
                break;
            }
            if (nums[right] < nums[index]) {
                rightMin = right;
                break;
            }
        }
        res.push([leftMin, rightMin]);
    }
    return res;
}
module.exports = {
    foundMonotoneStack: foundMonotoneStack
};