/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
  if(!head || !head.next) return false;
  var slow = head;
  var fast = head.next.next;
  while(fast && fast.next) {
    if(slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};

// return node where cycle meets
var detectCycle = function(head) {
  if(head === null) return null;
  var slow = head;
  var fast = head;
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      slow = head;
      while(true) {
        if(slow === fast) return slow;
        slow = slow.next;
        fast = fast.next;
      }
    }
  }
  return null;
};
