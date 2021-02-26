/**
 * return topK string
 * @param strings string字符串一维数组 strings
 * @param k int整型 the k
 * @return string字符串二维数组
 */
function topKstrings(strings, k) {
    // write code here
    strings.sort();
    let map = new Map();
    let tmp;
    for (let i = 0; i < strings.length; i++) {
        if (map.has(strings[i])) {
            map.set(strings[i], map.get(strings[i]) + 1);
        } else {
            map.set(strings[i], 1);
        }
    }
    let res = [];
    map.forEach((val, key) => {
        res.push([key, val]);
    });
    res.sort((a, b) => {
        return b[1] - a[1];
    });
    return res.slice(0, k);
}
module.exports = {
    topKstrings: topKstrings
};