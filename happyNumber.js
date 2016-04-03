/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function(n) {
    var holder = {};

    while(true) {
        var nums = n.toString().split("");
        var total = 0;
        for(var i = 0; i < nums.length; i++) {
            total += Math.pow(nums[i], 2);
        }

        if(total === 1) return true;

        if(holder[total]) return false;
        else holder[total] = true;

        n = total;
    }
};
