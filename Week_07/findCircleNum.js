/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const find = (p, i) => {
        if (p[i] === -1) {
            return i;
        }
        return find(p, p[i]);
    }
    const union = (p, x, y) => {
        const xs = find(p, x);
        const ys = find(p, y);
        if (xs !== ys) {
            p[xs] = ys;
        }
    }

    let parent = new Array(M.length).fill(-1);
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] == 1 && i !== j) {
                union(parent, i, j);
            }
        }
    }

    let cnt = 0;
    for (let i = 0; i < parent.length; i++) {
        if (parent[i] === -1) {
            cnt++;
        }
    }
    return cnt;
};