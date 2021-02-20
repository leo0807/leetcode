"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function LRU(operators, k) {
  var res = [];
  var map = new Map();

  for (var i = 0; i < operators.length; i++) {
    var _operators$i = _slicedToArray(operators[i], 3),
        op = _operators$i[0],
        key = _operators$i[1],
        value = _operators$i[2];

    if (op === 1) {
      if (map.size >= k) {
        map["delete"](map.keys().next().value);
        map.set(key, value);
      } else {
        if (map.has(key)) {
          map["delete"](key);
        }

        map.set(key, value);
      }
    } else if (op === 2) {
      if (!map.has(key)) {
        res.push(-1);
      } else {
        var _value = map.get(key);

        res.push(_value);
        map["delete"](key);
        map.set(key, _value);
      }
    }
  }

  return res;
}