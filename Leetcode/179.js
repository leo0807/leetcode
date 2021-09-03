/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    nums.sort((a, b) => (b + "" + a) - (a + "" + b));
    if (nums[0] === 0) return '0';
    return nums.join('');
};
var largestNumber2 = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (String(nums[i]) + String(nums[j]) < String(nums[j]) + String(nums[i])) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    let res = "";
    for (const i of nums) {
        res += i;
    }
    return String(BigInt(res));
};