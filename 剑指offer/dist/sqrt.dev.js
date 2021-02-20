"use strict";

function sqrt(x) {
  // write code here 
  for (var i = 0; i <= x; i++) {
    if (i * i <= x && (i + 1) * (i + 1) > x) {
      return i;
    }
  }
}