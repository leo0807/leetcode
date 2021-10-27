/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    const n = s.length, permutations = [s];
    for (let i = 0; i < n; i++) {
        const char = s[i];
        if (isNaN(parseInt(char, 10))) {
            const m = permutations.length;
            for (let j = 0; j < m; j++) {
                const chs = permutations[j].split('');
                if (chs[i] === chs[i].toLowerCase()) {
                    chs[i] = chs[i].toUpperCase();
                } else {
                    chs[i] = chs[i].toLowerCase();
                }
                permutations.push(chs.join(''));
            }
        }
    }
    return permutations;
};