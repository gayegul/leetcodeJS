/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    var holder = {};
    for(var i = 0; i < s.length; i++) {
        if(!holder[s[i]]) holder[s[i]] = 1;
        else holder[s[i]]++;
    }

    for(var j = 0; j < s.length; j++) {
        if(holder[t[j]] === 0) return false;
        else if(holder[t[j]] === undefined) return false;
        else {
            holder[t[j]]--;
            if(holder[t[j]] === 0) delete holder[t[j]];
        }
    }

    if(Object.keys(holder).length) return false;
    else return true;
};
