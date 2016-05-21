/**
 * @constructor
 */
var Queue = function() {
    this.stackToPush = [];
    this.stackToPop = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    if(!this.stackToPop.length) this.stackToPush.push(x);
    else {
        while(this.stackToPop.length) {
            this.stackToPush.push(this.stackToPop.pop());
        }
        this.stackToPush.push(x);
    }
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    var dequeued;
    if(this.stackToPop.length) dequeued = this.stackToPop.pop();
    else {
        while(this.stackToPush.length) {
            this.stackToPop.push(this.stackToPush.pop());
        }
        dequeued = this.stackToPop.pop();
    }
    return dequeued;
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    var peeked;
    if(this.stackToPop.length) peeked = this.stackToPop.pop();
    else {
        while(this.stackToPush.length) {
            this.stackToPop.push(this.stackToPush.pop());
        }
        peeked = this.stackToPop.pop();
    }
    this.stackToPop.push(peeked);
    return peeked;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return (!this.stackToPush.length && !this.stackToPop.length);
};
