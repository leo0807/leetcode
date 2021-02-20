"use strict";

function spiralOrder(matrix) {
  // write code here
  if (matrix.length === 0) return [];
  var top = 0,
      bottom = matrix.length - 1,
      left = 0,
      right = matrix[0].length - 1,
      direction = "right",
      res = [];

  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (var i = left; i <= right; i++) {
        res.push(matrix[top][i]);
      }

      top++;
      direction = "down";
    } else if (direction === "down") {
      for (var _i = top; _i <= bottom; _i++) {
        res.push(matrix[_i][right]);
      }

      right--;
      direction = "left";
    } else if (direction === "left") {
      console.log(1);

      for (var _i2 = right; _i2 >= left; _i2--) {
        console.log(matrix[bottom][_i2]);
        res.push(matrix[bottom][_i2]);
      }

      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (var _i3 = bottom; _i3 >= top; _i3--) {
        res.push(matrix[_i3][left]);
      }

      left++;
      direction = "right";
    }
  }

  return res;
}

var m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // const m = [[1, 2, 3, 3], [4, 5, 6, 3]]

console.log(spiralOrder(m));