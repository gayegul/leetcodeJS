//Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
//push(x) -- Push element x onto stack.
//pop() -- Removes the element on top of the stack.
//top() -- Get the top element.
//getMin() -- Retrieve the minimum element in the stack.

var MinStack = function() {
    this.holder = [];
    this.min = [];
};

MinStack.prototype.push = function(x) {
    if(x <= this.min[this.min.length - 1] || !this.min.length) {
        this.min.push(x);
    }
    this.holder.push(x);
};

MinStack.prototype.pop = function() {
    var result = this.holder[this.holder.length - 1];
    this.holder.length--;
    if(result === this.min[this.min.length - 1]) this.min.length--;
};

MinStack.prototype.top = function() {
    return this.holder[this.holder.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};
