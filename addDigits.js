var addDigits = function(num) {
    var sum = num;
    do {
        sum = sumDigits(sum);
    } while(sum >= 10);
    return sum;
};

function sumDigits(num) {
    var sum = 0;
    while(num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    sum += num;
    return sum;
}
