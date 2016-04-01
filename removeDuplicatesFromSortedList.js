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

    var current = head;

    while(current && current.next) {
        if(current.val === current.next.val) current.next = current.next.next;
        else current = current.next;
    }

    return head;
};
