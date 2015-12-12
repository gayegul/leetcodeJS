//Reverse a singly-linked list.
//Iteratively
var reverseList = function(head) {
    if(!head) return head;
    var current = head;
    var middle = current.next;
    head.next = null;
    while(current && middle) {
        var forward = middle.next;
        middle.next = current;
        current = middle;
        middle = forward;
    }
    return current;
};

//Recursively
var reverse = function(forward, current) {
  var head;
  if(forward.next) {
    head = reverseList(forward.next, forward);
  } else {
    head = forward;
  }
  forward.next = current;
  return head;
};

var reverseList = function(head) {
  if(!head || !head.next) return head;
  reverse(head.next, head);
};
