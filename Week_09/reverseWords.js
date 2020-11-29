/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    s = s.split(' ');
    s = s.filter(item => {
        if (item) {
            return item.split('').reverse().join('');
        }
    });
    return s.reverse().join(' ');
};