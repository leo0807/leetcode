function PrintFromTopToBottom(root) {
    // write code here
    if (!root) return [];
    let res = [];
    let stack = [root];
    while (stack.length) {
        let node = stack.shift();
        res.push(node.val);
        node.left && stack.push(node.left);
        node.right && stack.push(node.right); ``
    }
    return res;
}