/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length - 1;
  const res = [];
  const dfs = function (index, path) {
    path.push(index);
    if (index === n) {
      res.push(Array.from(path));
      return;
    }
    for (let i = 0; i < graph[index].length; i++) {
      dfs(graph[index][i], path);
      path.pop();
    }
  }
  dfs(0, []);
  return res;
};