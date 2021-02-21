
class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
    }
}

export function PrintFromTopToBottom(root: TreeNode): number[] {
    // write code here
    if(!root) return [];
    let queue: TreeNode[] = [];
    let res: number[] = [];
    queue = [root];
    while(queue.length){
        let node: TreeNode = queue.shift();
        res.push(node.val);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
    }
    return res;
}