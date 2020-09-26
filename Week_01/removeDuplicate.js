/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0; j = 0, len = nums.length;
    while (j < len) {
        if (nums[i] == nums[j]) {
            j++;
        } else {
            nums[++i] = nums[j];
        }
    }
    return i+1;
};