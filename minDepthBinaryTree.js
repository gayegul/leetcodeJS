//Recursively
var minDepth = function(root) {
    if(!root) return 0;
    var depth = 1;
    var rightDepth;
    var leftDepth;
    if(!root.left && !root.right) return depth;
    else if(!root.left && root.right) {
        rightDepth = minDepth(root.right);
        depth += rightDepth;
    }
    else if(root.left && !root.right) {
        leftDepth = minDepth(root.left);
        depth += leftDepth;
    }
    else {
        leftDepth = minDepth(root.left);
        rightDepth = minDepth(root.right);
        depth += leftDepth < rightDepth ? leftDepth : rightDepth;
    }
    return depth;
};
