/**
 * @param {number} n
 * @return {boolean}
 */

// using the biggest integer that is a power of 2
var isPowerOfTwo = function(n) {
  if(n > 0 && (Math.pow(2, 30) % n === 0)) return true;
  return false;
};

// using math
var isPowerOfTwo = function(n) {
  return ((Math.log10(n) / Math.log10(2)) % 1 === 0);
};

// using a loop
var isPowerOfTwo = function(n) {
  if(n <= 0) return false;

  while(n >= 2) {
    if(n % 2 !== 0) return false;
    n /= 2;
  }

  return n % 2 === 1;
};
