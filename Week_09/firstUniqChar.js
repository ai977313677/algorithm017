/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s.length) { return -1; }
    const map = {};
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (map[c]) {
            map[c].onlyOne = false;
        } else {
            map[c] = {
                index: i,
                onlyOne: true
            };
        }
    } // 进行一次统计
    let firstUnique = s.length;
    for (let key in map) {
        if (map[key].onlyOne) {
            firstUnique = Math.min(firstUnique, map[key].index);
        }
    }
    return firstUnique === s.length ? -1 : firstUnique;
};