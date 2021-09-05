/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MonotonicQueue {
    constructor() {
        this.arr = [];
    }
    push(num) {
        while (this.arr.length && this.arr[this.arr.length - 1] < num) {
            this.arr.pop();
        }
        this.arr.push(num);
    }
    max() {
        return this.arr[0];
    }
    pop(num) {
        if (this.arr.length && this.arr[0] === num) {
            this.arr.shift();
        }
    }

}
var maxSlidingWindow = function (nums, k) {
    if (k <= 0 || nums.length <= 1) return nums;
    const res = [], window = new MonotonicQueue();
    for (let i = 0, len = nums.length; i < len; i++) {
        window.push(nums[i]);
        if (i < k - 1) {
            continue;
        } else {
            res.push(window.max());
            window.pop(nums[i - k + 1]);
        }
    }
    return res;
};