/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
  const stack = [],
    length = s.length;
  let res = "";

  for (let i = 0; i < length; i++) {
    if (s.charAt(i) != ")") {
      stack.push(s.charAt(i));
    } else {
      let tmp = "";
      while (stack.length != 0 && stack[stack.length - 1] != "(") {
        tmp += stack.pop();
      }
      if (stack.length != 0 && stack[stack.length - 1] === "(") stack.pop();
      for (let j = 0; j < tmp.length; j++) {
        stack.push(tmp.charAt(j));
      }
    }
  }
  while (stack.length != 0) {
    res += stack.pop();
  }
  return Array.from(res).reverse().join("");
};