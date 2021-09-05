/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let sign = '+', stack = [], num = '';
    // 存在num仍有值的情况，需要在s走完之后，继续遍历
    for (let i = 0, len = s.length; i < len || num; i++) {
        if (s[i] === ' ') continue;
        if (/\D/.test(s[i])) {
            switch (sign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                case '/':
                    //  ｜ 0 操作等同于 Math.floor，向下取整
                    stack.push(stack.pop() / num | 0);
                    break;
            }
            sign = s[i];
            num = '';
        } else {
            num += s[i];
        }
    }
    return stack.reduce((prev, curr) => prev + (curr | 0), 0);
};