/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 两个维度身高h和k，先以身高维度进行排序
  // 便于根据身高而对k进行“插入”
  people.sort((a, b) => {
    if (b[0] !== a[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  const queue = [];
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i]);
  }
  return queue;
};