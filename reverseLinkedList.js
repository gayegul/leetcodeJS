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

// iteratively
var reverseList = function(head) {
    if(!head) return [];

    var prev = null;
    var current = head;

    while(current.next) {
        var temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    current.next = prev;
    return current;
};

// recursively
var reverseList = function(head) {
    if(!head || !head.next) return head;
    var nextHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return nextHead;
};
