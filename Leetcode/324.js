/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  // 拷贝一份排序好的nums数组
  const sort = nums.sort((a, b) => a - b).slice();
  let j = nums.length - 1, i = j >> 1, k = 0;
  while (k < sort.length) {
    // 判断k的奇偶,尾头尾头尾头的给nums[k]赋值
    nums[k] = (k & 1) ? sort[j--] : sort[i--];
    k++;
  }
};

作者：lmt_1024
链接：https://leetcode-cn.com/problems/wiggle-sort-ii/solution/bie-ren-de-ban-yun-gong-by-lmt_1024-pxfo/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。