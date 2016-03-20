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
    if(!root) return true;
    var difference = Math.abs(getHeight(root.left) - getHeight(root.right));
    if(difference >= 2) return false;
    else return (isBalanced(root.left) && isBalanced(root.right));
};

function getHeight(root) {
    if(!root) return 0;
    var left = getHeight(root.left);
    var right = getHeight(root.right);
    var result = Math.max(left, right);
    return ++result;
}
