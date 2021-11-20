/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n;) {
        const index = nums[i] - 1;
        if (nums[i] !== nums[index]) {
            [nums[index], nums[i]] = [nums[i], nums[index]];
        } else {
            i++;
        }
    }
    for (let i = 0; i < n; i++) {
        if (i + 1 !== nums[i]) return nums[i];
    }
};


function find_duplicate(arr) {
    let slow = arr[0];
    fast = arr[arr[0]];
    while (slow !== fast) {
        slow = arr[slow];
        fast = arr[arr[fast]];
    }
    // find cycle length
    let current = arr[arr[slow]];
    let cycleLength = 1;
    while (current !== arr[slow]) {
        current = arr[current];
        cycleLength += 1;
    }

    return find_start(arr, cycleLength);
}

function find_start(arr, cycleLength) {
    let pointer1 = arr[0];
    let pointer2 = arr[0];
    // move pointer2 ahead 'cycleLength' steps
    while (cycleLength > 0) {
        pointer2 = arr[pointer2];
        cycleLength -= 1;
    }
    // increment both pointers until they meet at the start of the cycle
    while (pointer1 !== pointer2) {
        pointer1 = arr[pointer1];
        pointer2 = arr[pointer2];
    }
    return pointer1;
}


/**
 * @param {number[]} nums
 * @return {number}
 * O(nLOGn)
 * 我们不要考虑数组,只需要考虑 数字都在 1 到 n 之间
 * arr = [1,3,4,2,2] 此时数字在 1 — 5 之间
 * mid = (1 + 5) / 2 = 3 arr小于等于的3有4个(1,2,2,3)，1到3中肯定有重复的值
 * mid = (1 + 3) / 2 = 2 arr小于等于的2有3个(1,2,2)，1到2中肯定有重复的值
 * mid = (1 + 2) / 2 = 1 arr小于等于的1有1个(1)，2到2中肯定有重复的值
 * 所以重复的数是 2
 */
var findDuplicate = function (nums) {
    let left = 0, right = nums.length;
    while (left < right) {
        const mid = left + ((right - left) >> 1);
        let count = 0;
        for (const num of nums) {
            count += num <= mid;
        }
        if (count <= mid) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
};

/**
快慢指针思想, fast 和 slow 是指针, nums[slow] 表示取指针对应的元素
注意 nums 数组中的数字都是在 1 到 n 之间的(在数组中进行游走不会越界),
因为有重复数字的出现, 所以这个游走必然是成环的, 环的入口就是重复的元素,
即按照寻找链表环入口的思路来做
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let fast = 0, slow = 0
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];
        if (slow === fast) {
            fast = 0;
            while (nums[slow] != nums[fast]) {
                slow = nums[slow];
                fast = nums[fast];
            }
            return nums[slow];
        }
    }
};