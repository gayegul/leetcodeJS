/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if(n <= 0) return 0;

    var climb1 = 1;
    if(n === 1) return climb1;

    var climb2 = 2;
    if(n === 2) return climb2;
    
    var stairs = climb1 + climb2;

    for(var i = 3; i <= n; i++) {
        climb = climb1 + climb2;
        climb1 = climb2;
        climb2 = climb;
    }

    return climb;
};
