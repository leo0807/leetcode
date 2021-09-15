/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function (s) {
    let res = 1;
    dfs(0, s, "", "");
    return res;
    function dfs(i, s, a, b) {
        if (check(a) && check(b)) {
            res = Math.max(res, a.length * b.length);
        }
        if (i === s.length) return;
        dfs(i + 1, s, a + s[i], b);
        dfs(i + 1, s, a, b + s[i]);
        dfs(i + 1, s, a, b);
    }
    function check(s) {
        let left = 0, right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
};