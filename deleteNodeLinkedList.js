/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

var deleteNode = function(node) {
  var current = node;
  var next = current.next;
  current.val = next.val;

  if(next.next) current.next = next.next;
  else current.next = null;
};
