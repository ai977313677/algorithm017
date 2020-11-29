/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) { return false; }
    let mapS = {}, mapT = {};

    let sn = '', tn = ''

    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] == undefined && mapT[[t[i]]] == undefined) {
            mapS[s[i]] = i;
            mapT[t[i]] = i;
        }
        sn += mapS[s[i]];
        tn += mapT[t[i]];
    }
    return sn === tn;
};