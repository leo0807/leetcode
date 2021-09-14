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