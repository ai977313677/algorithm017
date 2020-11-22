JavaScript不太适合于做位运算的操作，很多骚操作是无法完成的，但准确来说是32位以上的位运算。

比如在翻转比特位时，并不能用那种分治思想，所以这道题上，我是用c++完成的。

翻转比特位其实和翻转字符差别不大，只是没那么直观，考虑两个比特位的翻转，01 -> 10就是左右翻了个个，那考虑32位的时候，其实也一样，两个16位的先进行翻转，再对两个16位分别采取分治策略即可。

> 把十进制转换为二进制并将其变成字符串进行处理可能是看到题的第一个反应。

> 排序

```javascript
// 选择排序
const selectSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let min = -Infinity, minIdx = i;
        for (let j = i + 1; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            minIdx = min > nums[j] ? j : minIdx;
        }
        [nums[i], nums[minIdx]] = [nums[minIdx], nums[i]];
    }
}

// 插入排序
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

// 冒泡排序
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
// 快速排序
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

// 归并排序
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

// 计数排序

```