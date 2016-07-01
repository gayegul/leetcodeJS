/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
  if(nums.length === 0) return 0;
  if(nums.length === 1) return nums[0];

  var result = [nums[0], Math.max(nums[0], nums[1])];
  for(var i = 2; i < nums.length; i++) {
    result[i] = nums[i] + result[i - 2] > result[i - 1] ? nums[i] + result[i - 2] : result[i - 1];
  }
  return result[result.length - 1];
};
