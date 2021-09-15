/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let min = Infinity, res = "";
    const map = new Map();
    if (s.length < t.length) return res;
    for (const i of t) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1);
        } else {
            map.set(i, 1);
        }
    }
    // 创建左右指针, 从0开始
    const n = s.length;
    let left = 0, right = 0;
    while (right < n) {
        // 获取右指针的字符
        const char = s.charAt(right);
        // 检查map中是否有对应字符，有即减一
        if (map.has(char)) {
            map.set(char, map.get(char) - 1);
        }
        // 检查完毕，指针向右移动
        right++;
        // 检查是否所有t中字符都被检索到了
        while (checkMap(map)) {
            if (right - left < min) {
                min = right - left;
                res = s.slice(left, right);
            }
            // 全部检索成功，左指针向右移动
            const leftChar = s.charAt(left);
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
            }
            left++;
        }
    }
    return res;
};
const checkMap = function (map) {
    for (const i of map.values()) {
        if (i > 0) return false;
    }
    return true;
}