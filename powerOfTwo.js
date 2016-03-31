/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function(n) {
  if(n > 0 && (Math.pow(2, 30) % n === 0)) return true;
  return false;
};
