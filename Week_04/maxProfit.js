/**
 * 低点和高点是相对的，从低点到高点之间是单调不减的。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max += (prices[i] - prices[i - 1]);
        }
    }
    return max;
};