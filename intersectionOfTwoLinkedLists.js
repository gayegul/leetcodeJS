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
    if(!headA || !headB) return null;

    var currentA = headA;
    var currentB = headB;
    var counterA = 0;
    var counterB = 0;

    while(currentA) {
        counterA++;
        currentA = currentA.next;
    }

    while(currentB) {
        counterB++;
        currentB = currentB.next;
    }

    currentA = headA;
    currentB = headB;

    while(counterA > counterB) {
        currentA = currentA.next;
        counterA--;
    }

    while(counterB > counterA) {
        currentB = currentB.next;
        counterB--;
    }

    while(currentA) {
        if(currentA === currentB) return currentA;
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null;
};
