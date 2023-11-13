/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1), set2 = new Set(nums2)
    , res1 = new Set()
    , res2 = new Set();
  for (let i = 0, n = nums1.length; i < n; i++) {
    if (!set2.has(nums1[i])) res1.add(nums1[i]);
  }

  for (let i = 0, n = nums2.length; i < n; i++) {
    if (!set1.has(nums2[i])) res2.add(nums2[i]);
  }
  return [Array.from(res1), Array.from(res2)];
};