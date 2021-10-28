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


// Solution #
// This problem follows the Subsets pattern and can be mapped to Balanced Parentheses.We can follow a similar BFS approach.

//     Let’s take Example - 1 mentioned above to generate different ways to evaluate the expression.

// 1. We can iterate through the expression character - by - character.
// 2. we can break the expression into two halves whenever we get an operator(+, -, *).
// 3. The two parts can be calculated by recursively calling the function.
// 4. Once we have the evaluation results from the left and right halves, we can combine them to produce all results.

function diff_ways_to_evaluate_expression(input) {
    const result = [];
    // base case: if the input string is a number, parse and add it to output.
    if (!(input.includes('+')) && !(input.includes('-')) && !(input.includes('*'))) {
        result.push(parseInt(input));
    } else {
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            if (isNaN(parseInt(char, 10))) { // if not a digit
                // break the equation here into two parts and make recursively calls
                const leftParts = diff_ways_to_evaluate_expression(input.substring(0, i));
                const rightParts = diff_ways_to_evaluate_expression(input.substring(i + 1));
                for (let l = 0; l < leftParts.length; l++) {
                    for (let r = 0; r < rightParts.length; r++) {
                        let part1 = leftParts[l],
                            part2 = rightParts[r];
                        if (char === '+') {
                            result.push(part1 + part2);
                        } else if (char === '-') {
                            result.push(part1 - part2);
                        } else if (char === '*') {
                            result.push(part1 * part2);
                        }
                    }
                }
            }
        }
    }

    return result;
}

console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('1+2*3')}`);
console.log(`Expression evaluations: ${diff_ways_to_evaluate_expression('2*3-4-5')}`);