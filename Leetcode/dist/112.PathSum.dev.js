"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var hasPathSum = function hasPathSum(root, sum) {
  var res = [];
  if (!root) return res;
  var queue = [[root, [], 0]];

  while (queue.length) {
    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 3),
        node = _queue$shift2[0],
        path = _queue$shift2[1],
        curVal = _queue$shift2[2];

    var tmp = [].concat(_toConsumableArray(path), [node.val]);
    curVal += node.val;

    if (node.left === null && node.right === null) {
      console.log(1);

      if (curVal == sum) {
        res.push(tmp);
      }
    } else {
      if (node.right) {
        queue.push([node.right, tmp, curVal]);
      }

      if (node.left) {
        queue.push([node.left, tmp, curVal]);
      }
    }
  }

  return res;
};

function pathSum(root, sum) {
  // write code here
  var res = [];
  if (!root) return res;
  dfs(root, [], sum, res);
  return res;
}

function dfs(node, path, sum, res) {
  if (!node) return;
  sum -= node.val;
  var tmp = [].concat(_toConsumableArray(path), [node.val]);

  if (!node.left && !node.right && sum === 0) {
    res.push(tmp);
  }

  node.left && dfs(node.left, tmp, sum, res);
  node.right && dfs(node.right, tmp, sum, res);
}