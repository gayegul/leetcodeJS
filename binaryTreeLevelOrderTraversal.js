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

var levelOrder = function(root) {
  if(!root) return [];

  var result = [];
  var queue = [root];
  var temp = [];
  var currentLevel = 1;
  var nextLevel = 0;

  while(queue.length) {
    var popped = queue.shift();
    temp.push(popped.val);
    currentLevel--;

    if(popped.left) {
      queue.push(popped.left);
      nextLevel++;
    }

    if(popped.right) {
      queue.push(popped.right);
      nextLevel++;
    }

    if(!currentLevel) {
      result.push(temp);
      temp = [];
      currentLevel = nextLevel;
      nextLevel = 0;
    }
  }
  return result;
};
