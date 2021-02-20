"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function solve(grid) {
  // write code here
  var count = 0;
  if (grid.length === 0) return count;
  var row = grid.length,
      col = grid[0].length;

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        count++; // dfs(i, j);

        bfs(grid, i, j);
      }
    }
  }

  return count;
}

function dfs(grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
    return;
  }

  grid[row][col] = '0';
  dfs(row + 1, col);
  dfs(row - 1, col);
  dfs(row, col + 1);
  dfs(row, col - 1);
}

function bfs(grid, row, col) {
  var queue = [[row, col]];

  while (queue.length) {
    var _queue$shift = queue.shift(),
        _queue$shift2 = _slicedToArray(_queue$shift, 2),
        x = _queue$shift2[0],
        y = _queue$shift2[1];

    grid[x][y] = 0;

    for (var _i2 = 0, _arr2 = [[x + 1, y], [x, y + 1], [x - 1, y], [x, y - 1]]; _i2 < _arr2.length; _i2++) {
      var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
          i = _arr2$_i[0],
          j = _arr2$_i[1];

      if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] === '1') {
        queue.push([i, j]);
      }
    }
  }
}

var m = [['1', '1', '0', '0', '0'], ['0', '1', '0', '1', '1'], ['0', '0', '0', '1', '1'], ['0', '0', '0', '0', '0'], ['0', '0', '1', '1', '1']];
console.log(solve(m));