package Leetcode.UnionFind;

public class UF {
  // 连通分量个数
  private int count;
  // 存储一棵树
  private int[] parent;
  // 记录树的“重量”
  private int[] size;

  public UF(int n) {
    this.count = n;
    parent = new int[n];
    size = new int[n];
    for (int i = 0; i < n; i++) {
      parent[i] = i;
      size[i] = i;
    }
  }

  public void union(int p, int q) {
    int rootP = find(p);
    int rootQ = find(q);

    if (rootP == rootQ) {
      return;
    }

    // 小树接到大树下面，比较平衡
    if (size[rootP] > size[rootQ]) {
      parent[rootQ] = rootP;
      
    }
  }
}
