/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
// Brute Force
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        const m = Math.min(n, i + 1 + k);
        for (let j = i + 1; j < m; j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) return true;
        }
    }
    return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
    // 根据nums中的元素分配桶 ID
    // 如果nums[i] 属于 [0,t] 那么会放入0号桶内（因为Math.floor）
    // 如果nums[i] 属于 [t+1,2t+1] 那么会放入1号桶内（因为Math.floor）
    // 如果nums[i] 属于 [2t+2,3t+2] 那么会放入2号桶内（因为Math.floor）
    // 如果nums[i] 属于 [3t+3,4t+3] 那么会放入3号桶内（因为Math.floor）
    // 每个桶里面放t+1个数组元素

    // 按照t进行分桶，+1是为了避免除以0的情况
    const getId = function (num) {
        return Math.floor(num / (t + 1));
    }
    const map = new Map(), n = nums.length;
    for (let i = 0; i < n; i++) {
        // 获取当前元素的桶的编号
        const m = getId(nums[i]);
        // 两个元素位于一个桶号，符合条件
        if (map.has(m)) return true;
        // 测试两边的桶是否有符号条件的元素
        else if (map.has(m + 1) && Math.abs(map.get(m + 1) - nums[i]) <= t) return true;
        else if (map.has(m - 1) && Math.abs(map.get(m - 1) - nums[i]) <= t) return true;
        map.set(m, nums[i]);
        if (i >= k) {
            map.delete(getId(nums[i - k]));
        }
    }
    return false;
};