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

    height(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        return 1 + Math.max(this.height(node.left), this.height(node.right))
    }

    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (!root) {
            return true
        }

        const lh = this.height(root.left)
        const lr = this.height(root.right)

        return Math.abs(lh - lr) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right)
    }
}
