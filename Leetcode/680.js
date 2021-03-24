/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return validation(s, left + 1, right) || validation(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};

function validation(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}