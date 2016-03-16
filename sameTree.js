/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
  if(!p && !q) return true;
  else if((p && !q) || (!p && q)) return false;
  else if((p && q) && (p.val !== q.val)) return false;
  else if((p.right && !q.right) || (!p.right && q.right)) return false;
  else if((p.left && !q.left) || (!p.left && q.left)) return false;
  return (isSameTree(p.right, q.right) && isSameTree(p.left, q.left));
};
