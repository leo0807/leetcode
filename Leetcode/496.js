/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 单调栈
 */

var nextGreaterElement = function (nums1, nums2) {
    let res = [], stack = [], map = new Map();
    for (const i of nums2) {
        while (stack.length && stack[stack.length - 1] < i) {
            map.set(stack.pop(), i);
        }
        stack.push(i);
    }
    for (let i = 0; i < nums1.length; i++) {
        res[i] = map.get(nums1[i]) === undefined ? - 1 : map.get(nums1[i]);
    }
    return res;
};