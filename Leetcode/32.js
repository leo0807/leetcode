/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let maxLen = 0;
    let stack = [-1];
    for (let i = 0, len = s.length; i < len; i++) {
        if (s.charAt(i) === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }

    return maxLen;
};