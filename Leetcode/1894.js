/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    const sum = chalk.reduce((prev, curr) => prev + curr, 0);
    k %= sum
    for (let i = 0; i < chalk.length; i++) {
        if (chalk[i] > k) {
            return i;
        }
        k -= chalk[i];
    }
    return -1;
};

var chalkReplacer = function (chalk, k) {
    const n = chalk.length;
    if (chalk[0] > k) {
        return 0;
    }
    for (let i = 1; i < n; ++i) {
        chalk[i] += chalk[i - 1];
        if (chalk[i] > k) {
            return i;
        }
    }

    k %= chalk[n - 1];
    return binarySearch(chalk, k);
};

const binarySearch = (arr, target) => {
    let low = 0, high = arr.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (arr[mid] <= target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}

// 作者：LeetCode - Solution
// 链接：https://leetcode-cn.com/problems/find-the-student-that-will-replace-the-chalk/solution/zhao-dao-xu-yao-bu-chong-fen-bi-de-xue-s-qrn1/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。