/**
 * @param {number} num
 * @return {number[]}
 */

var countBits = function(num) {
  var result = [];
  for(var i = 0; i <= num; i++) {
    result.push(calculateOnesInBin(i));
  }
  return result;
};

function calculateOnesInBin(digit) {
  var ones = 0;
  while(digit > 0) {
    if(digit % 2 === 1) ones++;
    digit = Math.floor(digit / 2);
  }
  return ones;
}
