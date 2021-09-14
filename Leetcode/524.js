/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// 双指针
var findLongestWord = function (s, dictionary) {
    // 将字典的字典序倒排
    // 方便后续的比较字典序，在长度相等的情况下，后出现的，字典序考前
    dictionary.sort().reverse();
    let res = "", n = s.length;
    // 根据字典中的单词进行便利
    for (const word of dictionary) {
        let i = 0, wordLen = word.length;
        for (let k = 0; k < n; k++) {
            if (s.charAt(k) === word[i]) {
                i++;
            }
            if (i === wordLen && wordLen >= res.length) {
                res = word;
            }
        }
    }
    // console.log(res);
    return res;
};

var findLongestWord = function (s, dictionary) {
    const m = s.length;
    const f = new Array(m + 1).fill(0).map(() => new Array(26).fill(m));

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (s[i] === String.fromCharCode('a'.charCodeAt() + j)) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j];
            }
        }
    }
    let res = "";
    for (const t of dictionary) {
        let match = true;
        let j = 0;
        for (let i = 0; i < t.length; ++i) {
            if (f[j][t[i].charCodeAt() - 'a'.charCodeAt()] === m) {
                match = false;
                break;
            }
            j = f[j][t[i].charCodeAt() - 'a'.charCodeAt()] + 1;
        }
        if (match) {
            if (t.length > res.length || (t.length === res.length && t.localeCompare(res) < 0)) {
                res = t;
            }
        }
    }
    return res;
};

作者：LeetCode - Solution
链接：https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/solution/tong-guo-shan-chu-zi-mu-pi-pei-dao-zi-di-at66/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。