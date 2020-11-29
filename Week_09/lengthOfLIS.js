/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let ans = [];
    let old = [];
    let last = -Infinity;
    for (let i = 0; i < nums.length; ) {
        if (nums[i] >= last) {
            ans.push(nums[i]);
            last = nums[i];
            i++;
        } else {
            if (ans.length > old.length) {
                old = [...ans];
            }
            last = nums[i++];
            ans = [];
        }
    }
    return ans.length;
};