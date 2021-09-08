/**
 * @param {number} k 鸡蛋个数
 * @param {number} n 楼层数
 * @return {number}
 */
var superEggDrop = function (k, n) {
    if (n === 1) return 1;
    let ans = -1;
    const f = Array.from(new Array(n + 1), () => new Array(k + 1).fill(0));
    for (let i = 1; i <= k; i++) {
        f[1][i] = 1;
    }
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= k; ++j) {
            f[i][j] = 1 + f[i - 1][j - 1] + f[i - 1][j];
        }
        if (f[i][k] >= n) {
            ans = i;
            break;
        }
    }
    return ans;
};

// 暴力递归法
const superEggDrop2 = function (k, n) {
    return helper(k, n);
}
var helper = function (k, n) {
    if (n <= 1) return 1;
    if (k === 1) return n;
    let res = Infinity;
    for (let i = 1; i <= n; i++) {
        // helper(k - 1, n - 1) 当前楼层投递鸡蛋，鸡蛋碎裂， k - 1，继续走剩下的 n - 1层， 因为是递归，所以是n - 1
        // helper(k - 1, n - 1) 当前鸡蛋没有碎
        // + 1 是当前楼层所投递时候的那一步； max 是为了确定能最后得到结果
        const tmp = Math.max(helper(k - 1, i - 1), helper(k, n - i)) + 1;
        res = Math.min(res, tmp);
    }
    return res;
}
// 优化-自顶向下
let memo = [];

const superEggDrop3 = function (k, n) {
    memo = Array.from(k + 1, () => new Array(n + 1).fill(null));
    return helper(k, n);
}
const helper3 = function (k, n) {
    if (n === 0 || n === 1) return n;
    if (k === 1) return n;
    if (memo[k][n] !== null) return memo[k][n];
    let res = Infinity;
    for (let i = 0; i <= n; i++) {
        const t = Math.max(helper3(k - 1, i - 1), helper3(k, n - i)) + 1;
        res = Math.min(res, t);
    }
    return memo[k][n] = res;
}

// 使用二分法优化-时间复杂度从O（n）降低到O（logN）
const helper4 = function (k, n) {
    if (n === 0 || n === 1) return n;
    if (k === 1) return n;
    if (memo[k][n] !== null) return memo[k][n];
    let low = 1, high = n, t = 0;
    let res = Infinity;
    while (low <= high) {
        const mid = low + high >> 1;
        const t1 = helper4(k - 1, mid - 1);
        const t2 = helper4(k, n - mid);
        t = Math.max(t1, t2); //取子问题中最大
        if (t1 < t2) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
        res = Math.min(res, t);
    }
    return memo[k][n] = res;
}