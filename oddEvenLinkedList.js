/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    var currentOdd = head;
    var currentEven = currentOdd.next;
    var even = currentEven;
    while(currentEven && currentEven.next) {
        currentOdd.next = currentEven.next;
        currentOdd = currentEven.next;
        currentEven.next = currentOdd.next;
        currentEven = currentOdd.next;
    }
    currentOdd.next = even;
    return head;
};
