/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  var lengthA = getLength(headA);
  var lengthB = getLength(headB);

  if(!lengthA || !lengthB) return null;

  while(lengthA > lengthB) {
    headA = headA.next;
    lengthA--;
  }

  while(lengthB > lengthA) {
    headB = headB.next;
    lengthB--;
  }

  while(lengthA) {
    if(headA.val === headB.val) return headA;
    else {
      headA = headA.next;
      headB = headB.next;
      lengthA--;
    }
  }
  return null;
};

function getLength(list) {
  var length = 0;
  if(!list) return length;
  length++;

  while(list.next) {
    list = list.next;
    length++;
  }
  return length;
}
