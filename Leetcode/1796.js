/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
    var array = []
    for (i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 47 && s.charCodeAt(i) < 58) array.push(s[i])
    }
    var set = new Set(array)
    if (array.length == 0) return -1
    var a = Array.from(set)
    a = a.sort()
    if (a.length === 1) return -1
    return a[a.length - 2]
};