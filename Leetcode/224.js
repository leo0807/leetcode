/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = typeof s === 'string' ? Array.from(s).reverse() : s;
    let num = '', stack = [], sign = '+';
    while (s.length || num) {
        const c = s.pop();
        if (c === ' ') continue;
        else if (c === '(') num = calculate(s);
        else if (isNaN(c)) {
            num = Number(num);
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
                    stack.push(stack.pop() / num | 0);
                    break;
            }
            if (c === ')') break;
            sign = c;
            num = '';
        } else {
            num += c;
        }
    }
    return stack.reduce((prev, curr) => prev + (curr | 0));
};