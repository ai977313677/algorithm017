/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (!obstacleGrid || !obstacleGrid.length) {
        return 0;
    }
    let [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
    const f = new Array(n).fill(0);
    f[0] = obstacleGrid[0][0] == 0 ? 1 : 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (obstacleGrid[i][j] == 1) {
                f[j] = 0;
                continue;
            }
            if (j - 1 >= 0 && obstacleGrid[i][j - 1] == 0) {
                f[j] += f[j - 1];
            }
        }
    }
    console.log(f);
    return f[n - 1];
};