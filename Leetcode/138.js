/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 复制所对应节点
// 将复制的节点添加到对应节点之后
var copyRandomList = function (head) {
    if (!head) return null;
    for (let node = head; node !== null; node = node.next.next) {
        // 创建新的节点
        const newNode = new Node(node.val, node.next, null);
        // 将新的节点插入到当前节点之后
        node.next = newNode;
    }
    for (let node = head; node !== null; node = node.next.next) {
        // newNode为复制的节点
        const newNode = node.next;
        // 为复制节点添加random
        newNode.random = node.random === null ? null : node.random.next;
    }
    // 复制头节点，作为返回结果
    const headNew = head.next;
    for (let node = head; node !== null; node = node.next) {
        // 连接到headNew，获取复制的节点
        const nodeNew = node.next;
        // 跳过原始节点
        node.next = node.next.next;
        nodeNew.next = nodeNew.next === null ? null : nodeNew.next.next;
    }
    return headNew;
};

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 第一次遍历使用map创建新的节点来存储对应节点
// 第二次遍历使用map获取对应next和random节点并链接，生成新的节点
const copyRandomList2 = head => {
    if (!head) return null;
    const m = new Map();
    let node = head;
    // 遍历旧节点，复制各节点值
    while (node) {
        m.set(node, new Node(node.val, null, null));
        node = node.next;
    }
    node = head;
    // 遍历旧节点，复制连接关系
    while (node) {
        m.get(node).next = node.next ? m.get(node.next) : null;
        m.get(node).random = node.random ? m.get(node.random) : null;
        node = node.next;
    }
    return m.get(head);
};
