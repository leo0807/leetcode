/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let recursion = (path, start, n) => {
        if (n === 0 && path.length === k) {
            res.push([...path]);
        } else if (n < 0 && path.length > k) {
            return;
        } else {
            for (let i = start; i <= 9; i++) {
                path.push(i);
                recursion(path, i + 1, n - i);
                path.pop();
            }
        }
    }
    recursion([], 1, n);
    return res;
};

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const res = [], path = [];
    const dfs = function (sum, currIndex) {
        if (path.length === k && sum === n) {
            res.push(Array.from(path));
            return;
        }
        for (let i = currIndex; i <= 9; i++) {
            sum += i;
            path.push(i);
            dfs(sum, i + 1);
            sum -= i;
            path.pop();
        }
    }
    dfs(0, 1);
    return res;
};

// 剪枝
// 等差数列
var maxV = k => k * (9 + 10 - k) / 2;
var minV = k => k * (1 + k) / 2;
var combinationSum3 = function (k, n) {
    if (k > 9 || k < 1) return [];
    // if (n > maxV(k) || n < minV(k)) return [];
    // if (n === maxV(k)) return [Array.from({length: k}).map((v, i) => 9 - i)];
    // if (n === minV(k)) return [Array.from({length: k}).map((v, i) => i + 1)];

    const res = [], path = [];
    backtracking(k, n, 1, 0);
    return res;
    function backtracking(k, n, i, sum) {
        const len = path.length;
        if (len > k || sum > n) return;
        if (maxV(k - len) < n - sum) return;
        if (minV(k - len) > n - sum) return;

        if (len === k && sum == n) {
            res.push(Array.from(path));
            return;
        }

        const min = Math.min(n - sum, 9 + len - k + 1);

        for (let a = i; a <= min; a++) {
            path.push(a);
            sum += a;
            backtracking(k, n, a + 1, sum);
            path.pop();
            sum -= a;
        }
    }
};