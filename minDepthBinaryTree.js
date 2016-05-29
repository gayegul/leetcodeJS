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

  if(!root.right) return left;
  if(!root.left) return right;

  return Math.min(left, right);
}
