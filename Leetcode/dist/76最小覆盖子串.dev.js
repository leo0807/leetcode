"use strict";

/**
  * 
  * @param S string字符串 
  * @param T string字符串 
  * @return string字符串
  */
function minWindow(S, T) {
  // write code here
  var map = {},
      count = T.length,
      start = 0,
      end = 0,
      res = Infinity,
      head,
      len = S.length;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = T[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      map[i] = map[i] === undefined ? 1 : map[i] + 1;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  while (end < len) {
    if (map[S[end]] !== undefined) {
      if (map[S[end]] > 0) count--;
      map[S[end]]--;
    }

    end++;

    while (count === 0) {
      var left = end - start;

      if (res > left) {
        res = left;
        head = start;
      }

      if (map[S[start]] !== undefined) {
        if (map[S[start]] === 0) count++;
        map[S[start]]++;
      }

      start++;
    }
  }

  return res === Infinity ? '' : S.slice(head, head + res);
}

var m = "XDOYEZODEYXNZ",
    n = "XYZX";
console.log(minWindow(m, n));