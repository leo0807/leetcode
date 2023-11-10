/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  const sum = nums.reduce((prev, curr) => prev + curr);
  let res = 0, tmp = 0;
  const queue = new MaxPriorityQueue();
  nums.forEach(num => queue.enqueue(num));
  while (tmp < sum / 2) {
    const element = queue.dequeue().element;
    tmp += element / 2;
    queue.enqueue(element / 2);
    res++;
  }
  return res;
};