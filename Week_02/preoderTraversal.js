/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) { return []; }

    var stack = [root], ans = [];
    while (stack.length > 0) {
        const node = stack.pop();
        if (!node) { continue; }
        ans.push(node.val);
        stack.push(node.right, node.left);
    }
    return ans;
};