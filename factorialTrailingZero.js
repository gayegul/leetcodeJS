/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function(n) {
  var num = n;
  var zeros = 0;
  while(num > 1) {
    num = Math.floor(num / 5);
    zeros += num;
  }
  return zeros;
};
