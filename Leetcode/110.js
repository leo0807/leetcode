var isBalanced = function (root) {
  return dfs(root) >= 0;
  function dfs(root) {
    if (!root) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    // console.log(left - right)
    if (left >= 0 && right >= 0 && Math.abs(left - right) <= 1) {
      return 1 + Math.max(left, right);
    } else {
      return -1;
    }
  }
};

var isBalanced = function (root) {
  function helper(root) {
    if (!root) return 0;
    let left = helper(root.left);
    let right = helper(root.right);
    return 1 + Math.max(left, right);
  }
  if (!root) return true;
  if (Math.abs(helper(root.left) - helper(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};