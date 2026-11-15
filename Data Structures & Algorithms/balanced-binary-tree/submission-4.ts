/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {

        if(!root) {
            return true
        }

        const left = this.height(root.left)
        
        const right = this.height(root.right)

        const isRootBalanced = Math.abs(left - right) <= 1

        if(!isRootBalanced) {
            return false
        }

        return this.isBalanced(root.left) && this.isBalanced(root.right)

    }

    height(node: TreeNode | null) {
        if(!node) {
            return 0
        }

        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }
}
