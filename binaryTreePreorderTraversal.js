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

//Recursive
var preorderTraversal = function(root, result) {
    result = result || [];
    if(!root) return result;
    result.push(root.val);
    var left = preorderTraversal(root.left, result);
    var right = preorderTraversal(root.right, result);
    return result;
};

//Iterative
