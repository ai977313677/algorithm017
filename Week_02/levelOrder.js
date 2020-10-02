/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) { return []; }
    const queue = [root], ans = [];
    let lastChild = root;
    let tmp = [], node;
    while (queue.length > 0) {
        node = queue.shift();
        tmp.push(node.val);
        if (node.children) {
            node.children.forEach(item => queue.push(item));
        }
        if (node == lastChild) {
            ans.push(tmp);
            tmp = [];
            lastChild = queue[queue.length - 1];
        }
    }
    return ans;
};