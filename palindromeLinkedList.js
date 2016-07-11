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

var isPalindrome = function(head) {

    var current = head;
    var counter = 0;

    while(current) {
        counter++;
        current = current.next;
    }

    var mid = Math.floor(counter / 2);
    current = head;
    var prev = null;

    for(var i = 0; i < mid; i++) {
        var temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
    }

    var right = current;
    // check for an odd or even length to arrange right half of the LL
    if(counter % 2) right = current.next;
    current = prev;

    while(right) {
        if(right.val !== current.val) return false;
        current = current.next;
        right = right.next;
    }

    return true;
};
