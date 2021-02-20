"use strict";

function isPail(head) {
  // write code here
  var stack = [];

  while (head) {
    stack.push(head.val);
    head = head.next;
  }

  var length = stack.length;
  var halfLen = Math.floor(length / 2);

  for (var i = 0; i < halfLen; i++) {
    if (stack[i] !== stack[length - 1 - i]) {
      return false;
    }
  }

  return true;
}