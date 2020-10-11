/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const ans = [];
    var dfs = function (cur, n, k, tmp) {
        if (tmp.length + (n - cur + 1) < k) {
            return ;
        }
        if (tmp.length == k) {
            ans.push(tmp);
            return ;
        }
        dfs(cur + 1, n, k, [...tmp, cur]);
        dfs(cur + 1, n, k, tmp);
        }
    dfs(1, n, k, []);
    return ans;
};