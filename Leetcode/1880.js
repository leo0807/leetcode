/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    return helper(firstWord) + helper(secondWord) === helper(targetWord);
};


function helper(s) {
    return Number(s.split("").map(curr => (curr.charCodeAt(0) - 97).toString()).reduce((prev, curr) => prev + curr))
}