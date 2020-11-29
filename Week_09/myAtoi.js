/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    /* 暴力 */
    // 1. 丢弃无用空格
    str = str.trim();

    // 2. 判断第一个非空字符是否是有效的number字符
    let sign = 1, index = 0;
    if (str && str.length) {
        if (str[0] == '+') { sign = 1; index++; }
        else if (str[0] == '-') { sign = -1; index++; }
        else if (isNaN(parseInt(str[0]))) {
            return 0;
        }
    }

    // 3. 转换
    let ans = '0';
    for (; index < str.length; index++) {
        if (str[index]>='0' && str[index]<='9') {
            ans += str[index];
        } else {
            break;
        }
    }
    if (sign * +ans < -(2**31)) return -(2**31);
    if (sign * +ans > 2**31-1) return 2**31-1;
    return sign * +ans;
};

// 懒蛋法：return parseInt(str.trim(), 10);