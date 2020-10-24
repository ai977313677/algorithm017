/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    var map = {
        5: 0, 10: 0
    };
    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            map['5']++;
        } else {
            // 给的钱不是5块的时候进行找零
            if (bills[i] == 10) {
                map['10']++;
                if (map['5'] > 0) {
                    map['5']--;
                } else {
                    return false;
                }
            } else {
                if (map['10'] > 0) {
                    bills[i] -= 10;
                    map['10']--;
                }
                while (bills[i] > 5 && map['5'] > 0) {
                    bills[i] -= 5;
                    map['5']--;
                }
                if (bills[i] > 5) {
                    return false;
                }
            }
        }
    }
    return true;
};