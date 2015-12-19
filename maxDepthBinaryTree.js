//Recursively
var maxDepth = function(root) {
    var depth = 0;
    if(!root) return depth;
    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    depth += leftDepth > rightDepth ? leftDepth : rightDepth;
    return ++depth;
};

//Iteratively
