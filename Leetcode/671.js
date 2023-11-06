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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
    let node = root, stack = [], arr = [];
    while (node || stack.length != 0) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            let tmpNode = stack.pop();
            arr.push(tmpNode.val);
            node = tmpNode.right;
        }
    }
    arr.sort();
    let res = arr[0];
    for (const i of arr) {
        if (res < i) return i;
    }
    return -1;
};

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
 * @return {number}
 */
var findSecondMinimumValue2 = function (root) {
    let res = Infinity, stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node.left) {
            if (node.left.val != root.val) {
                res = Math.min(res, node.left.val);
            } else {
                stack.push(node.left);
            }
        }

        if (node.right) {
            if (node.right.val != root.val) {
                res = Math.min(res, node.right.val);
            } else {
                stack.push(node.right);
            }
        }
    }
    return res === Infinity ? -1 : res;
};