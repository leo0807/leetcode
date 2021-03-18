/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    const len = this.nums.length;
    const arr = [...this.nums]
    for (let i = 0; i < len; i++) {
        let index = Math.floor(Math.random() * len);
        [arr[i], arr[index]] = [arr[index], arr[i]];
    }
    return arr;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */