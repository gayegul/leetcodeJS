/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    var holder = {};
    for(var i = 0; i < nums.length; i++) {
        if(holder[nums[i]]) return true;
        else holder[nums[i]] = true;
    }
    return false;
};
