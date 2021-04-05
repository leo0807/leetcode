var findTarget = function (root, k) {
    let map = new Map();
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (map.has(k - node.val)) {
            return true;
        }
        map.set(node.val, 1);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return false;
};