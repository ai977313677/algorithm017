/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var ansMap = {};
    strs.forEach(item => {
        var sortedStr = item.split('').sort((a, b) => {
            if (a > b) { return 1; }
            else { return -1; }
        }).join('');
        ansMap[sortedStr] && ansMap[sortedStr].push(item) || (ansMap[sortedStr] = [item]);
    });
    var ans = [];
    for (let key in ansMap) {
        ans.push(ansMap[key]);
    }
    return ans;
};