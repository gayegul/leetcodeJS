/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrderBottom = function(root) {
    if(!root) return [];
    var result = [[root.val]];
    var queue = [root];
    var temp = [];
    var val = [];

    while(queue.length) {
        var popped = queue.shift();

        if(popped) {
            if(popped.left) {
                temp.push(popped.left);
                val.push(popped.left.val);
            }
            if(popped.right) {
                temp.push(popped.right);
                val.push(popped.right.val);
            }
        }
        if(!queue.length) {
            if(val.length) result.push(val);
            val = [];
            queue = temp;
            temp = [];
        }
    }
    return result.reverse();
};
