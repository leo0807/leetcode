/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function levelOrder(root: Node | null): number[][] {
	let arr: number[][] = [];
    if(!root) return arr;
    type nodeLevel = [Node | null, number];
    let level: number = 0;
    let queue: nodeLevel[] = [[root, level]];
    while(queue.length){
        let [node, level] = queue.shift();
        if(!arr[level]){
            arr[level] = [];
        }
        arr[level].push(node.val);
        if(node.children){
            for(let i of node.children){
                queue.push([i, level + 1]);
            }
        }
    }
    return arr;
};
