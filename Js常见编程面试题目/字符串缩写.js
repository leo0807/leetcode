// elephant - walk  => e6t - w2k，
function stringAbr(str) {
    str = str.split('');
    let pattern = new RegExp("[A-Za-z]+"), res = "", stack = [];
    for (let i = 0, len = str.length; i < len; i++) {
        if (pattern.test(str[i])) {
            stack.push(str[i]);
        } else {
            if (stack.length >= 4) {
                res = res + stack[0] + (stack.length - 2).toString() + stack[stack.length - 1];
                stack = [];
            }
            res += str[i];
        }
    }

    if (stack) res = res + stack[0] + (stack.length - 2).toString() + stack[stack.length - 1]
    return res;
}