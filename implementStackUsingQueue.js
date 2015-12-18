var Stack = function() {
    this.stack = [];
    this.length = 0;
};

Stack.prototype.push = function(x) {
    this.stack[this.length] = x;
    this.length++;
};

Stack.prototype.pop = function() {
    this.length--;
};

Stack.prototype.top = function() {
    return this.stack[this.length-1];
};

Stack.prototype.empty = function() {
    return this.length ? false : true;
};
