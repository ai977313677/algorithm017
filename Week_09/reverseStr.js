/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    if (s.length <= k) { return s.split('').reverse().join(''); }

    const sArr = s.split(''), len = s.length;
    const border = [];
    for (let i = 0; i < len; i+=2*k) {
        border.push([i, i+k-1]);
    }

    for (let i = 0; i < border.length; i++) {
        let [left, right] = border[i];
        while (left <= right) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
            left++;
            right--;
        }
    }

    return sArr.join('');
};