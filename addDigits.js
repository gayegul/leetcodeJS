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

// OR
function sumDigits(num) {
    var sum = 0;
    while(num >= 10) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    sum += num;
    if(sum >= 10) return sumDigits(sum);
    else return sum;
}
