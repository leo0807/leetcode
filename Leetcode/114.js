var prev = null;
var flatten = function (root) {

    if (root === null) return;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
};
