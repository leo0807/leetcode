// 第一次将它翻转到最上面
// 第二次将它翻转到最下面
// 这样我们每次轮都会把最大的放到最下面，重复递归，直到第一个。
var pancakeSort = function (arr) {
  var n = arr.length - 1;
  var res = [];

  while (n >= 1) {
    var i = 0;
    var index = 0;
    for (let j = 0; j <= n; j++) {
      if (arr[j] > i) {
        i = arr[j]
        index = j;
      }
    }

    reverse(arr, 0, index);

    reverse(arr, 0, n);

    res.push(index + 1);
    res.push(n + 1);
    n--;
  }

  return res;
};

function reverse(arr, start, end) {
  while (start <= end) {
    var t = arr[start];
    arr[start] = arr[end];
    arr[end] = t;
    start++;
    end--;
  }
}
