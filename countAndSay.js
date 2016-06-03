/**
 * @param {number} n
 * @return {string}
 */
 
var countAndSay = function(n) {
    if(n === null) return null;
    return helper(n)[n - 1];
};

function helper(num) {
    result = ["1"];
    var counter = 1;
    var str = '';
    for(var i = 0; i < num; i++) {
        var el = result[i];
        var char;
        for(var j = 0; j < el.length; j++) {
            char = el[j];
            if(el[j + 1] === char) counter++;
            else {
                str += counter + char;
                counter = 1;
            }
        }
        result.push(str);
        str = '';
    }
    return result;
}
