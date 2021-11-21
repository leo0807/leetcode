// 我们可以用两种颜色代表这两个集合，相邻的顶点不能是同一种颜色
// - 从一个点开始BFS，能遍历完所有的点吗？如果所有点是连通的，那就能，但题目没有说。
// - 所以，要遍历每个顶点，再遍历当前顶点的所有相邻顶点，才能保证不漏点。
// 避免重复访问顶点
// 1. 用一个 visited 数组记录顶点们是否被访问过（染过色），避免重复访问
// 2. 同时这个数组会记录：被访问过的顶点所染成的颜色

const isBipartite = function (grahp) {
  // undefined为未染色，1为蓝色，-1为黄色
  const visited = new Array(grahp.length);
  // 遍历每个顶点
  for (let i = 0; i < grahp.length; i++) {
    // 已经染过色的，跳过
    if (visited[i]) continue;
    // 队列初始推入顶点 i
    const queue = [i];
    // 染为蓝色
    visited[i] = 1;
    // 遍历顶点 i 所有相邻的顶点
    while (queue.length) {
      // 考察出列的顶点
      const cur = queue.shift();
      // 出列顶点的颜色
      const curColor = visited[cur];
      // 它的相邻顶点应该有的颜色
      const neighborColor = -curColor;

      for (let i = 0; i < grahp[cur].length; i++) {// 给他们都上色
        const neighbor = grahp[cur][i];
        // 还没上色
        if (visited[neighbor] === undefined) {
          visited[neighbor] = neighborColor; // 上色
          queue.push(neighbor); // 并推入队列
        } else if (visited[neighbor] !== neighborColor) {// 上了不对的颜色
          return false;
        }
      }
    }
  }
  return true; // 遍历完所有顶点，没有发现哪里不对
};