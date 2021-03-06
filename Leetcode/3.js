/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //     es6的set保存不重复的内容
    const collection = new Set();
    //     获取字符串长度
    const n = s.length;
    //     设置指针
    let pointer = -1;
    // 设置最大不重复长度
    let res = 0;
    for (let i = 0; i < n; i++) {
        if (i != 0) {
            //             开始下一次循环，说明遇到了重复的元素 需要删除最左边的元素
            collection.delete(s.charAt(i - 1));
        }
        while (pointer + 1 < n && !collection.has(s.charAt(pointer + 1))) {
            collection.add(s.charAt(pointer + 1));
            //               不断移动指针
            pointer++;
        }
        res = Math.max(res, pointer - i + 1);
    }
    return res;
};



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring2 = function (s) {
    let left = 0, res = 0, n = s.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        res = Math.max(res, i - left + 1);
    }
    return res;
};

// 记录最长字符串
var lengthOfLongestSubstring3 = function (s) {
    let tmp = [];
    let resArr = [];
    let len = s.length, i = 0;
    while (i < len) {
        while (tmp.includes(s[i])) tmp.shift();
        tmp.push(s[i]);
        if (tmp.length > resArr.length) { resArr = [...tmp] };
        i++;
    }
    return resArr.join("");
};


var lengthOfLongestSubstring4 = function (s) {
    let left = 0, res = 0, n = s.length;
    let map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(s[i])) {
            left = Math.max(left, map.get(s[i]) + 1);
        }
        map.set(s[i], i);
        res = Math.max(res, i - left + 1);
    }
    return res;
};
console.log(lengthOfLongestSubstring3(" "));
// 找到以arr[end]结尾的最长子串，然后max保持最大长度，当某个数在之前出现过，这个时候就把子串的起点start往后推一个，但是有一种情况，比如1，2，3，4，3，5，1。到第二个3时，以后的子串起点start为4，到第二个1时，如果不取最大的start，按start = map.get(arr[end]) + 1 算出起点start为2，显然以起点start = 2，结尾end = 1的子串234351有重复的，因此start要取最大的