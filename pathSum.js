/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

var hasPathSum = function(root, sum) {
    if(!root || sum === undefined) return false;
    if(!root.left && !root.right && sum === root.val) return true;

    var left;
    var right;

    if(root.left) left = hasPathSum(root.left, sum - root.val);
    if(root.right) right = hasPathSum(root.right, sum - root.val);

    if(left && !root.left.left && !root.left.right) return true;
    if(right && !root.right.left && !root.right.right) return true;

    if(right || left) return true;
    return false;
};
