/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0;
    while (n > 0) {
        cnt += n & 1;
        n >>>= 1
    }
    return cnt;
};