// https://www.codewars.com/kata/58bc16e271b1e4c5d3000151

function getMinBase(num) {
    num = Math.abs(num);
    
    if (num < 2) {
        return 2;
    }
    
    const sqrt = Math.ceil(Math.sqrt(num));
    
    // optimal for smaller bases:
    for (var i = 2; i <= sqrt; i++) {
        if ((num - 1) % i == 0 && isAllOnesInBase(num, i)) {
            return i;
        }
    }
    
    var numLessOne = num - 1;

    // optimal for larger bases:
    // iterate against factors of num - 1 larger than its square root
    for (var i = sqrt - 1; 1 <= i; i--) {
        var j = numLessOne / i;
        if (j % 1 == 0 && num % j == 1 && isAllOnesInBase(num, j)) {
            return j;
        }
    }
    
    return "oops";
}

function isAllOnesInBase(n, base) {
    while (n > 0) {
      if (n % base != 1) {
        return false;
      }
      n = Math.floor(n / base);
    }
    return true;
}

