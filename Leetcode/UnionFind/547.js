/**
 * @param {number[][]} isConnected
 * @return {number}
 */

class UnionFind {
  constructor(n) {
    this.count = n;
    this.parent = [];
    this.size = [];
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.size[i] = 1;
    }
  }
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;
    this.parent[rootP] = rootQ;
    // 小树接到大树下面，较平衡
    if (this.size[rootP] > this.size[rootQ]) {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    } else {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    }
    this.count--;
  }

  find(x) {
    while (this.parent[x] !== x) {
      this.parent[x] = this.parent[this.parent[x]];
      x = this.parent[x];
    }
    return x;
  }
  connected(p, q) {
    const rootP = find(p);
    const rootQ = find(q);
    return rootP === rootQ;
  }
  counts() {
    return this.count;
  }
}
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const uf = new UnionFind(n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j] == 1) {
        uf.union(i, j);
      }
    }
  }
  // 直接返回连通分量个数即为朋友圈个数
  // console.log(uf.parent)
  return uf.counts();
};