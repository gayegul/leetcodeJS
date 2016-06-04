/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  var seen = {};
  var result = [];

  for(var i = 0; i < nums1.length; i++) {
    if(!seen[nums1[i]]) seen[nums1[i]] = true;
  }

  for(var j = 0; j < nums2.length; j++) {
    if(seen[nums2[j]]) {
      result.push(nums2[j]);
      delete seen[nums2[j]];
    }
  }
  
  return result;
};
