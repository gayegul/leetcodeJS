/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 
var binaryTreePaths = function(root) {
    var result = [];
    if(!root) return result;
    addChildren(root, result, '');
    return result;
};

function addChildren(root, result, str) {
    if(!root) return;
    if(str === '') str += root.val;

    if(!root.left && !root.right) {
        result.push(str);
        return result;
    }

    if(root.left) addChildren(root.left, result, str + '->' + root.left.val);
    if(root.right) addChildren(root.right, result, str + '->' + root.right.val);
}
