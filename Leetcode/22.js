function generateParenthesis(n) {
    // write code here
    let res = [];
    dfs(0, 0, n, "", res);
    return res
}
function dfs(left, right, n, s, res) {
    if (s.length === n * 2) {
        res.push(s);
        return;
    }
    if (left < n) {
        dfs(left + 1, right, n, s + "(", res);
    }
    if (right < left) {
        dfs(left, right + 1, n, s + ")", res);
    }
}


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const count = [0, 0], res = [], path = [];
    const dfs = function (n) {
        if (path.length === 2 * n) {
            res.push(path.join(""));
            // return;
        }
        if (count[0] < n) {
            path.push('(');
            count[0]++;
            dfs(n);
            count[0]--;
            path.pop();
        }
        if (count[1] < n && count[0] > count[1]) {
            path.push(')');
            count[1]++;
            dfs(n);
            count[1]--;
            path.pop();
        }
    }
    dfs(n);
    return res;
};