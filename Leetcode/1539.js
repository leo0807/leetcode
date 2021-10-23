/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (nums, k) {

    let n = nums.length;
    for (let i = 0; i < n;) {
        const index = nums[i] - 1;
        if (nums[i] > 0 && nums[index] !== nums[i]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
        } else {
            i++;
        }
    }
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (i + 1 !== nums[i]) {
            if (k === 1) {
                return i + 1;
            }
            k--;
            set.add(i + 1);
        }
    }
    n = nums.length;
    let i = 1, res = n + i;
    while (k >= 1) {
        if (!set.has(n + i)) {
            res = n + i;
        }
        i++;
        k--;
    }
    return res;
};