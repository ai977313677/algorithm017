/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0, right = nums.length - 1, mid;
    if (nums[left] <= nums[right]) {
        return nums[left];
    }
    while (left <= right) {
        mid = left + Math.floor((right - left) / 2);
        // 中间元素一定处于有序子序列（即mid - 1, mid, mid + 1是有序的）
        // 旋转之后，被划分成两个有序子序列
        // 如若不然，其中较小者必为最小值
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        // 最小值必然在无序的序列中
        if (nums[mid] >= nums[0]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};