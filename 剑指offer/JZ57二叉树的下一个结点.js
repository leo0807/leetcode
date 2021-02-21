/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
function GetNext(pNode) {
    // write code here
    if (!pNode) return pNode;
    if (pNode.right) {
        pNode = pNode.right;
        while (pNode.left) {
            pNode = pNode.left;
        }
        return pNode;
    }

    while (pNode.next) {
        let node = pNode.next;
        if (node.left === pNode) {
            return node;
        }
        pNode = pNode.next;
    }
    return null;
}
module.exports = {
    GetNext: GetNext
};