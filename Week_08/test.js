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

console.log(selectSort([2,5,1,512,324,3465,3423,4,123,12,3,1254,32,5,34]));