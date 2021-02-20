"use strict";

var solveSudoku = function solveSudoku(board) {
  // let rows = new Array(9).fill(new Array(10).fill(0)),
  var rows = new Array(9);

  for (var i = 0; i < 9; i++) {
    rows[i] = new Array(10).fill(0);
  }

  var cols = new Array(9);

  for (var _i = 0; _i < 9; _i++) {
    cols[_i] = new Array(10).fill(0);
  }

  var boxes = new Array(9);

  for (var _i2 = 0; _i2 < 9; _i2++) {
    boxes[_i2] = new Array(10).fill(0);
  } // let cols = new Array(9).fill(new Array(10).fill(0)),
  //     boxes = new Array(9).fill(new Array(10).fill(0));


  for (var _i3 = 0; _i3 < 9; _i3++) {
    for (var j = 0; j < 9; j++) {
      var c = board[_i3][j];

      if (c !== '.') {
        var n = parseInt(c),
            bx = Math.floor(j / 3),
            by = Math.floor(_i3 / 3); //                 0代表为使用，1为使用过

        rows[_i3][n] = 1;
        console.log(_i3, n);
        cols[j][n] = 1; //                     box索引

        boxes[by * 3 + bx][n] = 1;
      }
    }
  }

  fill(board, 0, 0);

  function fill(board, x, y) {
    //     完成填充条件
    if (y === 9) return true; //     下一个点的坐标

    var nx = (x + 1) % 9,
        //         判断进入是否下一行
    ny = nx === 0 ? y + 1 : y; //     如果已经填充，则进入下一个点

    if (board[y][x] !== '.') return fill(board, nx, ny); //  没有被填充过

    for (var _i4 = 1; _i4 <= 9; _i4++) {
      var _bx = Math.floor(x / 3),
          _by = Math.floor(y / 3),
          box_key = _by * 3 + _bx;

      if (!rows[y][_i4] && !cols[x][_i4] && !boxes[box_key][_i4]) {
        rows[y][_i4] = 1;
        cols[x][_i4] = 1;
        boxes[box_key][_i4] = 1;
        board[y][x] = _i4.toString();
        console.log(board[y][x]); //                 递归向下一个点求解

        if (fill(board, nx, ny)) return true; //                 恢复初始状态

        board[y][x] = '.';
        boxes[box_key][_i4] = 0;
        rows[y][_i4] = 0;
        cols[x][_i4] = 0;
      }
    }

    return false;
  }

  console.log(board);
};

var board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
solveSudoku(board);