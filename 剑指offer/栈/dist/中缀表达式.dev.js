"use strict";

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 返回表达式的值
 * @param s string字符串 待计算的表达式
 * @return int整型
 */
function solve(s) {
  // write code here
  var stack = [],
      sum = 0,
      num = 0,
      sign = '+',
      len = s.length;

  for (var i = 0; i < len; i++) {
    var _char = s.charAt(i);

    if (_char === '(') {
      //             括号内部通过递归单独计算
      var j = i + 1,
          counter = 1; //             判断括号中还有括号的情况

      while (counter > 0) {
        if (s[j] === '(') {
          counter++;
        }

        if (s[j] === ')') {
          counter--;
        }

        j++;
      }

      num = solve(s.substring(i + 1, j - 1));
      i = j - 1;
    }

    if (isDigit(_char)) {
      num = num * 10 + Number(_char);
    }

    if (!isDigit(_char) || i === len - 1) {
      if (sign === '+') {
        stack.push(num);
      } else if (sign === '-') {
        stack.push(num * -1);
      } else if (sign === '*') {
        stack.push(stack.pop() * num);
      } else if (sign === '/') {
        stack.push(stack.pop() / num);
      }

      num = 0;
      sign = _char;
    }
  }

  while (stack.length) {
    sum += stack.pop();
  }

  return sum;
}

function isDigit(str) {
  return /^\d+$/.test(str);
}