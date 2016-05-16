/**
 * @param {number} n
 * @return {boolean}
 */
 
var isHappy = function(n) {
  var holder = {};
  var result = 0;
  var number = n;
  while(!holder[result]) {
    while(number !== 0) {
      result += Math.pow((number % 10), 2);
      number = Math.floor(number / 10);
    }
    if(result === 1) return true;
    if(holder[result]) return false;
    holder[result] = 1;
    number = result;
    result = 0;
  }
  return false;
};
