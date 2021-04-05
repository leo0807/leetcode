function KthNode(pRoot, k) {
    // write code here
    let stack = [], count = 0, curr = pRoot;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        let node = stack.pop();
        count++;
        if (count === k) return node;
        if (node.right) curr = node.right;
    }
    return null;
}