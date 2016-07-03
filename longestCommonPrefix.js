/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  if(!strs || !strs[0]) return '';
  if(strs.length === 1) return strs[0];
  var result = '';
  for(var i = 0; i < strs[0].length; i++) {
    var common = strs[0][i];
    for(var j = 1; j < strs.length; j++) {
        if(strs[j][i] !== common) return result;
    }
    result += common;
  }
  return result;
};
