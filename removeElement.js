/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function(nums, val) {
  var left = 0;
  var right = nums.length - 1;

  while(left <= right) {
    if(nums[left] === val) {
      var temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      right--;
    } else left++;
  }

  return left;
};
