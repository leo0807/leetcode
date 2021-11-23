/**
 * @param {string} s
 * @return {boolean}
 */
// 假设母串S是由子串s重复N次而成，则 S + S则有子串s重复2N次，
// 那么现在有： S = Ns， S + S=2Ns， 其中N >= 2。
// 如果条件成立， S + S=2Ns, 掐头去尾破坏2个s，
// S + S中还包含2 *（N - 1）s, 又因为N >= 2,
// 因此S在(S + S)[1: -1]中必出现一次以上
var repeatedSubstringPattern = function (s) {
    return (s + s).slice(1, s.length * 2 - 1).includes(s);
};



/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    if (!s.length) return false;
    const n = s.length;
    const next = new Array(n).fill(0);
    getNext(next, s);
    //  如果 next[len - 1] != -1，则说明字符串有最长相同的前后缀（就是字符串里的前缀子串和后缀子串相同的最长长度）
    // 最长相等前后缀的长度为：next[len - 1] + 1。
    // 数组长度为：len。
    // 如果len % (len - (next[len - 1] + 1)) == 0 ，则说明 (数组长度-最长相等前后缀的长度) 正好可以被 数组的长度整除，说明有该字符串有重复的子字符串
    if (next[n - 1] !== 0 && n % (n - next[n - 1]) === 0) return true;
    return false;
};

function getNext(next, s) {
    next[0] = 0;
    let j = 0;
    for (let i = 1; i < s.length; i++) {
        while (j > 0 && s[i] !== s[j]) {
            j = next[j - 1];
        }
        if (s[i] === s[j]) j++;
        next[i] = j;
    }
}