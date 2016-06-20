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

var isSymmetric = function(root) {
  if(!root) return true;

  var queue = [root];
  var temp = [];

  while(queue.length) {
    var popped = queue.shift();

    if(popped) {
      temp.push(popped.left);
      temp.push(popped.right);
    }

    if(!queue.length) {
      if(!isPalindrome(temp)) return false;
      queue = temp;
      temp = [];
    }
  }
  return true;
};

function isPalindrome(arr) {
  for(var i = 0; i < arr.length; i++) {
    var left = arr[i];
    var right = arr[arr.length - 1 - i];
    if(!left && !right) continue;
    if((left && !right) || (!left && right)) return false;
    if(left.val !== right.val) return false;
  }
  return true;
}

// recursively
var isSymmetric = function(root) {
    if(!root) return true;
    return compare(root.left, root.right);
};

function compare(left, right) {
    if(!left && !right) return true;
    if(left && !right) return false;
    if(right && !left) return false;
    if(left.val !== right.val) return false;
    var partI = compare(left.left, right.right);
    var partII = compare(left.right, right.left);
    return partI && partII;
}
