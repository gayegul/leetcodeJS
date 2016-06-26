/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    flattenNode(root);
};

// 1 flatten left subtree
// 2 flatten right subtree
// 3 link them
// 4 return right most decendent
function flattenNode(node) {
   if(!node) return;
   if(!node.left && !node.right) return node;
   var tailOfLeft = flattenNode(node.left);
   var tailOfRight = flattenNode(node.right);
   if(tailOfLeft) {
       tailOfLeft.right = node.right;
       node.right = node.left;
   }
   node.left = null;
   if(tailOfRight) return tailOfRight;
   return tailOfLeft;
}
