/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    // 终止条件： 当 left >= right ，说明此子树节点数量 ≤ 1 ，无需判别正确性，因此直接返回 true
    const helper = function (nums, left, right) {
        if (left >= right) return true;
        // 存储左子树的左边界
        let i = left;
        while (nums[i] < nums[right]) i++;
        // 分界点
        let j = i;
        while (nums[i] > nums[right]) i++;
        // 确定右子树的所有节点大于根节点
        // 左子树区间 [left, j - 1]
        // 右子树区间 [j, right - 1]
        return i === right && helper(nums, left, j - 1) && helper(nums, j, right - 1);
    };
    return helper(postorder, 0, postorder.length - 1);
};

/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function (postorder) {
    const n = postorder.length, stack = [];
    let preElem = Infinity;
    for (let i = n - 1; i >= 0; i--) {
        // 左子树元素必须要小于递增栈被peek访问的元素，否则就不是二叉搜索树
        if (postorder[i] >= preElem) return false;
        while (stack.length && postorder[i] < stack[stack.length - 1]) {
            // 当前元素小于栈顶元素，说明已经进入左子树，此时栈顶元素为子树的根结点
            // 所以剩余的postorder中的元素均小于当前元素
            preElem = stack.pop();
        }
        stack.push(postorder[i]);
    }
    return true;
};