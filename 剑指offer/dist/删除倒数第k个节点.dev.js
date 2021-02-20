"use strict";

function removeNthFromEnd(head, n) {
  // write code here
  var p = head;
  var q = head;

  while (n > 0) {
    if (p) p = p.next;else return null;
    n--;
  }

  if (!p) return head.next;

  while (p.next != null) {
    p = p.next;
    q = q.next;
  }

  q.next = q.next.next;
  return head;
}