/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1, len = digits.length;
    while (len-- > 0) {
        const tmp = carry + digits[len];
        digits[len] = tmp % 10;
        carry = Math.floor(tmp / 10);
    }
    if (carry > 0) {
        return [1, ...digits];
    }
    return digits;
};