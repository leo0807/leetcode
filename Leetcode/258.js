/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
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