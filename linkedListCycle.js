//Given a linked list, determine if it has a cycle in it
//Floyd's cycle-finding algorithm || The Tortoise and Hare Algorithm

var hasCycle = function(head) {
    if(!head) return false;
    var slow = head;
    var fast = head;
    while(fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(!fast) return false;
        if(slow === fast) return true;
    }
    return false;
};
