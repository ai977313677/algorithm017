/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = g.sort((a, b) => a-b);
    s = s.sort((a, b) => a-b);
    let kid = 0;
    for (let val of s) {
        if (val >= g[kid]) {
            kid++;
        }
    }
    return kid;
};