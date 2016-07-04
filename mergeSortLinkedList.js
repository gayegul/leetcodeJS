function mergeSort(head) {
  if(!head.next) return head;
  var length = 1;
  var current = head;
  var right = null;
  var left = head;
  var prev = null;
  while(current) {
    current = current.next;
    length++;
  }
  current = left;
  var mid = Math.floor(length/2);
  while(mid > 0) {
    prev = current;
    current = current.next;
    mid--;
  }
  right = current;
  prev.next = null;
  var newHeadLeft = mergeSort(left);
  var newHeadRight = mergeSort(right);
  return merge(newHeadLeft, newHeadRight);
}
