var maxPathSum = function (root) {
    let res = -Infinity;
    const dfs = node => {
        if (!node) return 0;
        // 子节点若为负，则舍弃掉
        const leftMax = Math.max(0, dfs(node.left));
        const rightMax = Math.max(0, dfs(node.right));
        res = Math.max(leftMax + rightMax + node.val, res);
        // 当前节点加上最大的边
        return Math.max(leftMax, rightMax) + node.val;
    }
    dfs(root)
    return res;
}