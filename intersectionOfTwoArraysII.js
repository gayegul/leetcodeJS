/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
  if(!nums1.length || !nums2.length) return [];
  var holder = {};
  var result = [];

  for(var i = 0; i < nums1.length; i++) {
    if(!holder[nums1[i]]) holder[nums1[i]] = 1;
    else holder[nums1[i]]++;
  }

   for(var j = 0; j < nums2.length; j++) {
    if(holder[nums2[j]]) {
      holder[nums2[j]]--;
      result.push(nums2[j]);
    }
  }

  return result;
};
