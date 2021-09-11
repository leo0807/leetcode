/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const mapS = new Map(), mapT = new Map(), n = s.length;
    for (let i = 0; i < n; i++) {
        const a = s.charAt(i);
        const b = t.charAt(i);
        if ((mapS.has(a) && mapS.get(a) !== b) ||
            mapT.has(b) && mapT.get(b) !== a) {
            return false;
        }
        mapS.set(a, b);
        mapT.set(b, a);
    }
    return true
};