/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];
    let tmp = Number(tokens[0]);
    for (const i of tokens) {
        if (!isNaN(i)) {
            stack.push(Number(i));
        } else {
            const num2 = stack.pop(), num1 = stack.pop();
            switch (i) {
                case '+':
                    tmp = num1 + num2;
                    break;
                case '-':
                    tmp = num1 - num2;
                    break;
                case '*':
                    tmp = num1 * num2;
                    break;
                case '/':
                    tmp = num1 / num2;
                    tmp = tmp < 0 ? Math.ceil(tmp) : Math.floor(tmp);
                    break;
                default:
                    continue;
            }
            stack.push(tmp);
        }
    }
    return tmp;
};