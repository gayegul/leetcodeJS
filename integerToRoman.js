/**
 * @param {number} num
 * @return {string}
 */
 
var intToRoman = function(num) {
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    var count = 0;
    var result = '';
    for(var i = 0; i < nums.length; i++) {
        if(num >= nums[i]) {
           count = Math.floor(num / nums[i]);

           while(count > 0) {
               result += roman[i];
               count--;
           }

           num = num % nums[i];
        }
    }
    return result;
};
