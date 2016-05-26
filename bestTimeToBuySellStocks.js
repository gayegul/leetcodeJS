/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  if(!prices || prices.length < 2) return 0;

  var max = 0;
  var min = 0;
  var diff = 0;

  for(var i = 0; i < prices.length; i++) {
    var current = prices[i];
    if(current > prices[max]) {
      max = i;
    }
    else if(current < prices[min]) {
      // to avoid selling before buying
      min = i;
      max = i;
    }

    if(prices[max] - prices[min] > diff) {
      diff = prices[max] - prices[min];
    }
  }

  return diff;
};
