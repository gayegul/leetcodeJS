/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isIsomorphic = function(s, t) {
  var word1 = {};
  var word2 = {};

  for(var i = 0; i < s.length; i++) {
    if(!word1[s[i]]) {
      if(word2[t[i]]) return false;
      word1[s[i]] = t[i];
      word2[t[i]] = s[i];
    }
    else {
      if(word1[s[i]] !== t[i] || word2[t[i]] !== s[i]) return false;
    }
  }

  return true;
};
