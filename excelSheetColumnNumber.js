/**
 * @param {string} s
 * @return {number}
 */

var titleToNumber = function(s) {
    var result = 0;

    for(var i = 0; i < s.length; i++){
        result += (s[s.length - i - 1].charCodeAt(0) - 'A'.charCodeAt(0) + 1) * Math.pow(26, i);
    }

    return result;
};
