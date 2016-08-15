/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 
var removeElements = function(head, val) {
    if(!head || val === undefined) return null;
    while(head.val === val) {
        head = head.next;
        if(!head) return head;
    }
    var prev = head;
    var current = head.next;
    while(current) {
        if(current.val === val) prev.next = current.next;
        else prev = current;
        current = current.next;
    }
    return head;
};
