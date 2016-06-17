/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var minDepth = function(root) {
    return getDepth(root, 0);
};

function getDepth(root, result) {
    if(!root) return result;
    var left = getDepth(root.left, result) + 1;
    var right = getDepth(root.right, result) + 1;
    // if you have both children you can pick min depth
    if(root.left && root.right) return Math.min(left, right);
    // if you don't have both children you should pick the existing depth
    // you cannot pick 0 for the non existing child, that path is closed
    else {
        if(!root.right) return left;
        if(!root.left) return right;
    }
}
