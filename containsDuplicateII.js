/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
  if(!nums || k === null || nums.length < 2) return false;
  var holder = {};
  for(var i = 0; i < nums.length; i++) {
    if(holder.hasOwnProperty(nums[i])) {
      if(i - holder[nums[i]] <= k) return true;
    }
    holder[nums[i]] = i;
  }
  return false;
};
