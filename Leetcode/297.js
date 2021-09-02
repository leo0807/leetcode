var serialize = function (root) {
    const res = [];
    bfs(root);
    return res;
    function bfs(root) {
        if (root == null) return;
        const queue = [root];
        while (queue.length) {
            const cur = queue.shift();
            if (cur == null) {
                res.push('#');
                continue;
            }
            res.push(cur.val);
            queue.push(cur.left);
            queue.push(cur.right);
        }
    }
};

var deserialize = function (data) {
    if (!data.length) return null;
    const root = new TreeNode(data[0]);
    const queue = [root];
    for (let i = 1; i < data.length;) {
        const parent = queue.shift();
        left = data[i++];
        if (left !== '#') {
            parent.left = new TreeNode(left)
            queue.push(parent.left)
        } else {
            parent.left = null;
        }
        right = data[i++];
        if (right !== '#') {
            parent.right = new TreeNode(right)
            queue.push(parent.right)
        } else {
            parent.right = null;
        }
    }
    return root;
};