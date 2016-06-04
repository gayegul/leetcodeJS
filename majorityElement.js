/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
  var majNum = Math.floor(nums.length / 2) + 1;
  var holder = {};

  for(var i = 0; i < nums.length; i++) {
    if(holder[nums[i]]) holder[nums[i]]++;
    else holder[nums[i]] = 1;
    if(holder[nums[i]] === majNum) return nums[i];
  }
};

//coolest way
var majorityElement = function(nums) {
  var majEl = nums[0];
  var count = 1;
  for(var i = 1; i < nums.length; i++) {
   if(count === 0) {
     majEl = nums[i];
     count = 1;
   }
   else {
     if(majEl === nums[i]) count++;
     else count--;
   }
  }
  return majEl;
};
