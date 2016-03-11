/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(!nums || !nums.length || target === undefined) return -1;
    var holder = {};
    for(var i = 0; i < nums.length; i++) {
        if(holder[target - nums[i]] !== undefined) return [holder[target - nums[i]], i];
        else holder[nums[i]] = i;
    }
    return -1;
};
