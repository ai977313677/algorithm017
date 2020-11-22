const insertSort = nums => {
    if (nums.length < 2) { return nums; }
    for (let i = 1; i < nums.length; i++) {
        const tmp = nums[i];
        for (let j = i; j >= 0; j--) {
            if (tmp < nums[j - 1]) {
                nums[j] = nums[j - 1];
            } else {
                nums[j] = tmp;
                break;
            }
        }
    }
    return nums;
}

const bubleSort = nums => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] <= nums[j]) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }
    return nums;
}

const selectSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let min = -Infinity, minIdx = i;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            minIdx = min > nums[j] ? j : minIdx;
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
    return nums;
}

const partion = (nums, left, right) => {
    const key = nums[left];
    while (left < right) {
        while (left < right && nums[right] >= key) {
            right--;
        }
        if (left < right) {
            nums[left] = nums[right];
        }
        while (left < right && nums[left] <= key) {
            left++;
        }
        if (left < right) {
            nums[right] = nums[left];
        }
    }
    nums[left] = key;
    return left;
}

const quickSort = (nums, left, right) => {
    if (left < right) {
        const part = partion(nums, left, right);
        quickSort(nums, left, part - 1);
        quickSort(nums, part + 1, right);
    }
}

const quickSortDemo = nums => {
    quickSort(nums, 0, nums.length - 1);
    return nums;
}

console.log(quickSortDemo([2, 5, 1, 512, 324, 3465, 3423, 4, 123, 12, 3, 1254, 32, 5, 34]));