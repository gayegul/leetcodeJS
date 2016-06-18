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

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head;
    var prev = head;
    var current = head.next;
    while(current) {
        if(current.val === prev.val) prev.next = current.next;
        else prev = prev.next;
        current = current.next;
    }
    return head;
};
