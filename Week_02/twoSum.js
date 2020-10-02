/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    nums.forEach((item, index) => {
        // 重复元素总是保留靠后的索引，因为后续遍历时是从前向后遍历
        map[item] = index;
    });
    for (let i = 0; i < nums.length; i++) {
        const next = target - nums[i];
        if (map[next] && map[next] != i) {
            return [i, map[next]];
        }
    }
    return [];
};