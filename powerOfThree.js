/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function(n) {
  /*
  2147483647 is the maximum positive value for a 32-bit
  signed binary integer in computing.
  3^19 is the biggest integer that is a power of 3
  */

  if(n < 0) return false;
  return Math.pow(3, 19) % n === 0 ? true: false;
};

// Using a loop
var isPowerOfThree = function(n) {
  while(n >= 3) {
    if(n % 3 !== 0) return false;
    else n /= 3;
  }

  return (n === 1);
};

// Using math
var isPowerOfThree = function(n) {
  return ((Math.log10(n) / Math.log10(3)) % 1 === 0);
};
