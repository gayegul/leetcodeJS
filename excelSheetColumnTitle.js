/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var result = '';
    while(n > 0) {
        var digit = (n - 1) % 26;
        result = String.fromCharCode(65 + digit) + result;
        n = Math.floor((n - 1) / 26);
    }
    return result;
};
