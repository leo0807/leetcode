/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
// 类似于205
// 注意 map 中的val不可重复
// 其余一一对应即可
var wordPattern = function (pattern, s) {
    const map = new Map(), n = pattern.length;
    s = s.split(' ');
    if (s.length !== pattern.length) return false;
    for (let i = 0; i < n; i++) {
        const a = pattern.charAt(i);
        if (!map.has(a)) {
            map.set(a, s[i]);
        } else {
            if (map.get(a) !== s[i]) {
                return false;
            }
        }
    }
    const valMap = new Map();
    for (const i of map.values()) {
        if (!valMap.has(i)) valMap.set(i, i);
        else return false;
    }

    return true;
};

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const word2ch = new Map();
    const ch2word = new Map();
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    for (const [i, word] of words.entries()) {
        const ch = pattern[i];
        if (word2ch.has(word) && word2ch.get(word) != ch || ch2word.has(ch) && ch2word.get(ch) !== word) {
            return false;
        }
        word2ch.set(word, ch);
        ch2word.set(ch, word);
    }
    return true;
};
