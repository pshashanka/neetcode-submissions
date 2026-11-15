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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const levelMap = new Map<number, number[]>()
        
        const dfs = (node: TreeNode | null, level: number) => {
            if(!node) {
                return 
            }

            let arr: number[] = levelMap.get(level) || []
            arr.push(node.val)
            levelMap.set(level, arr)

            dfs(node.left, level+1)
            dfs(node.right, level+1)
        }

        dfs(root, 0)
        const ans = []
        for(const [k,v] of levelMap) {
            ans.push(v?.pop())
        }
        return ans
    }
}
