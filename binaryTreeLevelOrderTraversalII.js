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
    var tempVal = [];
    var temp = [];
    var queue = [root];
    var finalResult = [];

    while(queue.length) {
        var popped = queue.shift();

        if(popped.left) {
            tempVal.push(popped.left.val);
            temp.push(popped.left);
        }
        if(popped.right) {
            tempVal.push(popped.right.val);
            temp.push(popped.right);
        }

        if(!queue.length) {
            if(temp.length) {
                result.push(tempVal);
                queue = temp;
                temp = [];
                tempVal = [];
            }
        }
    }

    while(result.length) {
        var item = result.pop();
        finalResult.push(item);
    }
    return finalResult;
};
