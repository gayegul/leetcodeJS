/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
  if(!root) return [];

  var stack = [];
  var result = [];
  var current = root;
  while(true) {
    while(current) {
      stack.push(current);
      current = current.left;
    }

    if(!stack.length) break;

    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
