/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function(pattern, str) {
  var seen = {};
  var words = {};
  var strArr = str.split(' ');

  if(strArr.length !== pattern.length) return false;

  for(var i = 0; i < strArr.length; i++) {
    if(seen[pattern[i]]) if(seen[pattern[i]] !== strArr[i]) return false;
    if(words[strArr[i]]) if(words[strArr[i]] !== pattern[i]) return false;

    if(!seen[pattern[i]]) seen[pattern[i]] = strArr[i];
    if(!words[strArr[i]]) words[strArr[i]] = pattern[i];
  }

  return true;
};
