/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    const len = nums.length;
    if (len < 2) return nums;
    let mid = Math.floor(len / 2);
    let left = nums.slice(0, mid),
        right = nums.slice(mid);
    return mergeSort(sortArray(left), sortArray(right));
};
function mergeSort(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) res.push(left.shift());
    while (right.length) res.push(right.shift());
    return res;
}