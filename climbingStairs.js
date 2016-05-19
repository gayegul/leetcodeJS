/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  var steps = [0, 1, 2];
  for(var i = 3; i <= n; i++) {
    steps.push(steps[i - 2] + steps[i - 1]);
  }
  return steps[n];
};
