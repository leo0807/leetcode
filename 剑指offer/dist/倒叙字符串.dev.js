"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
// 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，
// 不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
function fun(num) {
  var num1 = num / 10;
  var num2 = num % 10;

  if (num1 < 1) {
    return num;
  } else {
    num1 = Math.floor(num1);
    return "".concat(num2).concat(fun(num1));
  }
}

var a = fun(12345);
console.log(a);
console.log(_typeof(a));