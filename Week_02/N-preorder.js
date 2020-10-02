/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var ans = [];
    var walk = function (root) {
        if (!root) { return root; }
        ans.push(root.val);
        for (let child of root.children) {
            walk(child);
        }
    }
    walk(root);
    return ans;
};