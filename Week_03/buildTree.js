/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var map = {}
var buildTree = function(preorder, inorder) {
    let n = preorder.length;
    for (let i = 0; i < n; i++) {
        map[inorder[i]] = i;
    }
    return myBuildTree(preorder, inorder, 0, n-1, 0, n-1);
};

var myBuildTree = function (preorder, inorder, preFrom, preTo, inFrom, inTo) {
    if (preFrom > preTo) {
        return null;
    }
    let preorderRoot = preFrom;
    let inorderRoot = map[preorder[preorderRoot]];

    let root = new TreeNode(preorder[preorderRoot]);
    let leftSubNum = inorderRoot - inFrom;
    root.left = myBuildTree(preorder, inorder, preFrom + 1, preFrom + leftSubNum, inFrom, inorderRoot - 1);
    root.right = myBuildTree(preorder, inorder, preFrom + leftSubNum + 1, preTo, inorderRoot + 1, inTo);
    return root;
}