/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// recursively
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;
    var newHead = l1.val < l2.val ? l1 : l2;
    if(l1.val < l2.val) l1.next = mergeTwoLists(l1.next, l2);
    else l2.next = mergeTwoLists(l1, l2.next);
    return newHead;
};

// iteratively
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    var list1 = l1;
    var list1next = list1.next;
    var list2 = l2;
    var list2next = list2.next;
    var newHead = null;
    var current = null;

    while(list1 && list2) {
        if(list1.val < list2.val) {
            if(!newHead) {
                newHead = list1;
                current = newHead;
            } else {
                current.next = list1;
                current = list1;
            }
            list1.next = null;
            list1 = list1next;
            if(list1) list1next = list1.next;
        }
        else {
            if(!newHead) {
                newHead = list2;
                current = newHead;
            }
            else {
                current.next = list2;
                current = list2;
            }
            list2.next = null;
            list2 = list2next;
            if(list2) list2next = list2.next;
        }
    }
    if(list1) {
        current.next = list1;
    }
    if(list2) {
        current.next = list2;
    }
    return newHead;
};
