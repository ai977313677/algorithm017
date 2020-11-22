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

const mergeSort = arr => {  // 采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort([2, 5, 1, 512, 324, 3465, 3423, 4, 123, 12, 3, 1254, 32, 5, 34]));