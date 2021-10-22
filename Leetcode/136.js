var singleNumber = function (nums) {
    return nums.reduce((prev, curr) => prev ^= curr, 0);
};