/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    var obj = {};
    for (let i = 0; i < s.length; i++) {
        if (isNaN(obj[s[i]] + 1)) obj[s[i]] = 1;
        else obj[s[i]] += 1;
        if (isNaN(obj[t[i]] - 1)) obj[t[i]] = -1;
        else obj[t[i]] -= 1;
    }
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            if (obj[i] !== 0) return false;
        }
    }
    return true;
};