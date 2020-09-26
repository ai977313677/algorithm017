/**
 * 算是数学思想，线性代数的转置T
 * (AB) => (BA)
 * (AB) => (A^T B^T) => (A^T B^T)^T => (BA)
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    const len = nums.length;
    rotateSlice(nums, 0, len - k);
    rotateSlice(nums, len - k, len);
    rotateSlice(nums, 0, len);
};

var rotateSlice = function (nums, start, end) {
    for (let i = start, j = end - 1; i < j; i++, j--) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}