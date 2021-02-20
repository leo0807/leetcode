"use strict";

function deleteDup(head) {
  // write code here
  if (!head) return head;
  var cur = head;

  while (cur.next !== null) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}