/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length;
    // 将负数变为大于 n + 1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            nums[i] = n + 1;
        }
    }
    // 标记为负数
    for (let i = 0; i < n; i++) {
        // 当前数字可能已经被标记过
        // 避免负负为正数的情况
        let num = Math.abs(nums[i])
        // 数组为[1, n]，下标为[0, n -1]
        if (num <= n) {
            nums[num - 1] = - Math.abs(nums[num - 1]);
        }
    }
    // 从头开始遍历
    // 不是负数，说明没有标记过，其对应的下标为最小数
    for (const i of nums) {
        if (i > 0) {
            return nums.indexOf(i) + 1;
        }
    }
    // 都没有标记 则最小数为 n + 1
    return n + 1;
};

// 置换法
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive2 = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] - 1 != i) {
            return i + 1;
        }
    }
    return n + 1;

};