/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    let left = 0, right = nums.length - 1, res = 0, mod = 1e9 + 7;
    const powersOf2 = [];
    let powerOf2 = 1;
    for (let i = 0; i < nums.length; i++) {
        powersOf2.push(powerOf2);
        powerOf2 = powerOf2 * 2 % mod;
    }
    nums = nums.sort((a, b) => a - b);


    while (left <= right) {
        if (nums[left] + nums[right] > target) right--;
        else {
            res = (res + powersOf2[right - left]) % mod;
            left++;
        }
    }
    return res;
};
