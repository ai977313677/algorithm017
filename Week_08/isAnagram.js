/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const map = {};
    [...s].forEach(c => map[c] = map[c] ? map[c] + 1: 1);
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]] || map[t[i]] < 0) {
            return false;
        }
        map[t[i]]--;
    }
    return true;
};