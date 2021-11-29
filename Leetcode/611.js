/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
    let res = 0;
    nums.sort((a, b) => a - b);
    for (let i = nums.length - 1; i > 1; i--) {
        let left = 0, right = i - 1;
        while (left < right) {
            if (nums[left] + nums[right] > nums[i]) {
                res += right - left;
                right--;
            } else {
                left++;
            }
        }
    }
    return res;
};

var triangleNumber = function (nums) {
    const n = nums.length;
    nums.sort((a, b) => a - b);
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let left = j + 1, right = n - 1, k = j;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                if (nums[mid] < nums[i] + nums[j]) {
                    k = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            ans += k - j;
        }
    }
    return ans;
};

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/valid-triangle-number/solution/you-xiao-san-jiao-xing-de-ge-shu-by-leet-t2td/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。