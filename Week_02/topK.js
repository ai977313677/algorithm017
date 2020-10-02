/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    nums.forEach(item => {
        map[item] = map[item] ? map[item]+1: 1;
    });
    const arr = [];
    for (let key in map) {
        arr.push({ key, val: map[key]})
    }
    return arr.sort((a, b) => -(a.val - b.val)).map(item => item.key).slice(0, k);
};