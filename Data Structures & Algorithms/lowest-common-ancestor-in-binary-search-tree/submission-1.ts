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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {

        let lca = root

        const dfs = (node: TreeNode | null) => {

            if(!node) {
                return
            }

            if(p.val < node.val && q.val < node.val) {
                dfs(node.left)
            }else if(p.val > node.val && q.val > node.val) {
                dfs(node.right)
            } else {
                lca = node
            }                         
        }


        dfs(root)

        return lca
    }
}
