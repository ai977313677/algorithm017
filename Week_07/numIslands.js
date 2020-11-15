/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dfs = (g, x, y) => {
        let xlen = g.length, ylen = g[0].length;
        if (x < 0 || y < 0 || xlen <= x || ylen <= y || g[x][y] === '0') {
            return ;
        }

        g[x][y] = '0';
        dfs(g, x - 1, y);
        dfs(g, x + 1, y);
        dfs(g, x, y - 1);
        dfs(g, x, y + 1);
    }

    if (!grid || !grid.length) {
        return 0;
    }

    let xlen = grid.length, ylen = grid[0].length;
    let island = 0;
    for (let i = 0; i < xlen; i++) {
        for (j = 0; j < ylen; j++) {
            if (grid[i][j] === '1') {
                island++;
                dfs(grid, i, j);
            }
        }
    }
    return island;
};