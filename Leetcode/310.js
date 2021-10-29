/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// From the above - mentioned examples, we can clearly see that any leaf node
// (i.e., node with only one edge) can never give us an MHT 
// because its adjacent non - leaf nodes will always give an MHT with a smaller height.
// All the adjacent non - leaf nodes will consider the leaf node as a subtree.
// Let’s understand this with another example.Suppose we have a tree with root ‘M’ and height ‘5’.Now, if we take another node, say ‘P’, and make the ‘M’ tree as its subtree, then the height of the overall tree with root ‘P’ will be ‘6’ (= 5 + 1).Now, this whole tree can be considered a graph, where ‘P’ is a leaf as it has only one edge(connection with ‘M’). This clearly shows that the leaf node(‘P’) gives us a tree of height ‘6’ whereas its adjacent non - leaf node(‘M’) gives us a tree with smaller height ‘5’ - since ‘P’ will be a child of ‘M’.

// This gives us a strategy to find MHTs.Since leaves can’t give us MHT, we can remove them from the graph and remove their edges too.Once we remove the leaves, we will have new leaves.Since these new leaves can’t give us MHT, we will repeat the process and remove them from the graph too.We will prune the leaves until we are left with one or two nodes which will be our answer and the roots for MHTs.

// We can implement the above process using the topological sort.Any node with only one edge(i.e., a leaf) can be our source and, in a stepwise fashion, we can remove all sources from the graph to find new sources.We will repeat this process until we are left with one or two nodes in the graph, which will be our answer.
// ----- 无向无环图A在删除度为1的结点后得到无向无环图B。
// 可以证明，图A所成最小高度树TreeA是由图B所成的最小高度树TreeB接上被删除结点后构成的。
// 反证法：图B所成的树TreeB如果不是最小高度树，那么存在图B的最小高度树TreeB’，TreeB’的高度比TreeB更小。
// 那么TreeB’接上被删除结点后高度比TreeA更小，这与TreeA是最小高度树矛盾。

// ----- 既然图A的最小高度树是由图B的最小高度树接上被删除的结点所成。
// 那么图A的最小高度树的根结点与图B的最小高度树的根结点是相同的，因为，接上被删除的结点不会成为根结点，
// 否则相比不成为根结点的高度还要高1。因此找图A的最小高度树的根结点演变为找图B的最小高度树的根结点。

var findMinHeightTrees = function (n, edges) {
    if (n < 1) return [];
    if (n == 1) return [0];
    const inDegree = Array(n).fill(0); // count of incoming edges
    const graph = Array(n).fill(0).map(() => Array());
    edges.forEach(edge => {
        const n1 = edge[0],
            n2 = edge[1];
        graph[n1].push(n2);
        graph[n2].push(n1);

        inDegree[n1]++;
        inDegree[n2]++;
    });

    const leaves = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 1) {
            leaves.push(i);
        }
    }

    let totalNodes = n;
    while (totalNodes > 2) {
        const leaveSize = leaves.length;
        totalNodes -= leaveSize;
        for (let i = 0; i < leaveSize; i++) {
            const vertex = leaves.shift();
            graph[vertex].forEach(child => {
                inDegree[child]--;
                inDegree[child] === 1 && leaves.push(child);
            })
        }
    }
    return leaves;
};