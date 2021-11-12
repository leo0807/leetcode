function employeeFreeTime(schedule) {
  // Write your code here
  const time = [];
  // 先对数组进行拆分
  for (const item of schedule) {
    const n = item.length;
    for (let i = 0; i < n; i += 2) {
      time.push([item[i], item[i + 1]]);
    }
  }
  // 进行时间合并
  time.sort((a, b) => a[0] - b[0]);
  const merge = [];

  for (const item of time) {
    if (!merge.length) {
      merge.push(item);
    } else {
      console.log(merge[merge.length - 1])
      if (merge[merge.length - 1][1] > item[0]) {
        merge[merge.length - 1][1] = Math.max(item[1], merge[merge.length - 1][1])
      } else {
        merge.push(item);
      }
    }
  }
  const res = [];
  for (let i = 0; i < merge.length - 1; i++) {
    if (merge[merge.length - 1][1] !== merge[i + 1][0]) {
      res.push([merge[i][1], merge[i + 1][0]])
    }
  }
  return res;
}
console.log(employeeFreeTime([[1, 2, 5, 6], [1, 3], [4, 10]]));
console.log(employeeFreeTime([[1, 3, 6, 7], [2, 4], [2, 5, 9, 12]]));


