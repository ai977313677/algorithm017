/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    if (!S.length) { return S; }
    let left = 0, right = S.length - 1;
    
    const sArr = S.split('');
    while (left < right) {
        while (!/[a-zA-Z]/.test(sArr[left])) { left++; }
        while (!/[a-zA-Z]/.test(sArr[right])) { right--; }
        if (left < right) {
            [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
        }
        left++;
        right--;
    }
    return sArr.join('');
};