/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function(root) {
    return getHeightIfBalanced(root) !== -1;
};

function getHeightIfBalanced(root) {
    if(!root) return 0;
    var leftResult = getHeightIfBalanced(root.left);
    if(leftResult === -1) return -1;
    var rightResult = getHeightIfBalanced(root.right);
    if(rightResult === -1) return -1;
    return Math.abs(leftResult - rightResult) <= 1 ? Math.max(leftResult, rightResult) + 1 : -1;
 }
