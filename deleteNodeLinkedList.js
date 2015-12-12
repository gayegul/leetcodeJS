//Delete a node (except the tail) in a singly linked list,
//given only access to that node.

var deleteNode = function(node) {
    node.val = node.next.val;
    if(!node.next.next) {
        node.next = null;
    } else {
    node.next = node.next.next;
    }
};
