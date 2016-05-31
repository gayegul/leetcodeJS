/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
  var plus = 0;
  var leftover = 0;

  for(var i = digits.length - 1; i >= 0; i--) {
    if(i === digits.length - 1) digits[i] = 1 + digits[i];
    if(leftover) {
      digits[i] = 1 + digits[i];
      leftover = 0;
    }
    if(digits[i] === 10) {
      digits[i] = 0;
      leftover = 1;
    }
  }

  if(leftover) digits.unshift(1);
  return digits;
};
