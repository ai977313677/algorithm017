/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    nums.forEach((item, index) => {
        hash[item] = index;
    });

    let next, tmp;
    for (let i = 0; i < nums.length; i++) {
        next = target - nums[i];
        tmp = hash[next];
        if (tmp && tmp != i) {
            return [i, tmp];
        }
    }
    return [];
};