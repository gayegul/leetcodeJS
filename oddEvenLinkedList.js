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
    if(!head) return null;
    
    var current = head.next;
    var prev = head;
    var head2 = current;
    var tail2 = current;

    while(current) {
        prev.next = current.next;
        if(head2 === tail2) {
            head2.next = current;
            tail2 = current;
        }
        else if(head2 !== tail2) {
            tail2.next = current;
            tail2 = current;
        }

        current.next = null;
        if(prev.next) prev = prev.next;
        current = prev.next;
    }

    prev.next = head2;
    return head;
};
