/**
 * f(n) = f(n - 1) + f(n - 2)
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 0, b = 1;
    let sum = 0;
    while (n--) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};