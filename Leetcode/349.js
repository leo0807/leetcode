/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let arrs = [nums1, nums2];
    return Array.from(new Set(arrs.reduce((total, arr) => {
        return arr.filter(item => total.includes(item));
    })))
};
