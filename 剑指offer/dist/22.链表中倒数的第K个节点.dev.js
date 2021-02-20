"use strict";

// 输出倒数第k个节点
function getkthElement(head, k) {
  var stack = [];

  while (head) {
    stack.push(head);
    head = head.next;
  }

  var res = null;

  while (k) {
    res = stack.pop();
    k--;
  }

  return res.val;
}

function FindKthToTail(head, k) {
  // write code here
  if (!head || k <= 0) return null;
  var slow = head,
      fast = head;

  while (k--) {
    if (fast) fast = fast.next;else return null;
  }

  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}