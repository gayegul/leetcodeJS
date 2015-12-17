//Implement the following operations of a queue using stacks.

//push(x) -- Push element x to the back of queue.
//pop() -- Removes the element from in front of queue.
//peek() -- Get the front element.
//empty() -- Return whether the queue is empty.

var Queue = function() {
    this.length = 0;
    this.queue = [];
};

Queue.prototype.push = function(x) {
    this.queue.push(x);
    this.length++;
};

Queue.prototype.pop = function() {
    this.queue.splice(0,1);
    this.length--;
};

Queue.prototype.peek = function() {
    return this.queue[0];
};

Queue.prototype.empty = function() {
    if(!this.length) return true;
    return false;
};
