"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function FindNumsAppearOnce(array) {
  // write code here
  var len = array.length;
  if (len <= 2) return array;
  var res = new Set();

  for (var i = 0; i < len; i++) {
    if (res.has(array[i])) {
      res["delete"](array[i]);
    } else {
      res.add(array[i]);
    }
  }

  return _toConsumableArray(res);
}