/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    var set = new Set(allowed);
    return words.reduce((res, word) => {
        return word.split('').every(c => set.has(c)) ? ++res : res;
    }, 0)
};