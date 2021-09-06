/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let bitsArr = new Array(32).fill(0), res = 0;
    for (let i = 0, n = nums.length; i < n; i++) {
        for (let j = 0; j < 32; j++) {
            bitsArr[j] += (nums[i] >> j & 1) === 1 ? 1 : 0;
        }
    }

    for (let i = 31; i >= 0; i--) {
        res = res << 1; //向右移动一位
        if (bitsArr[i] % 3 === 1) {
            // 右移的0和1相异或 等同于加1
            res |= 1;
        }
    }
    return res;
};
// 位运算
// 记录每个bit为1的次数。出现1次存在ones上。出现2次存在twos上。出现3次清除掉。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ones = 0, twos = 0, commmonBitsMask = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        twos = twos | (ones & nums[i]);
        ones ^= nums[i];

        commmonBitsMask = ~(ones & twos);
        ones &= commmonBitsMask;
        twos &= commmonBitsMask;
    }
    return ones;
};