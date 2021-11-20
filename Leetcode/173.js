/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
// 实际上就是迭代版的中序遍历

var BSTIterator = function (root) {
    this.stack = [];
    while (root) {
        this.stack.push(root);
        root = root.left;
    }

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    let node = this.stack.pop();
    const res = node.val;
    node = node.right;
    while (node) {
        this.stack.push(node);
        node = node.left;
    }
    return res;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    const stack = [];
    this.queue = [];
    while (stack.length || root) {
        if (root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            this.queue.push(root.val);
            root = root.right;
        }
    }
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.queue.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    // console.log(this.queue);
    return this.queue.length !== 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */