class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums: number[]): number[][] {

        const ans = []
        const picked: Map<number, boolean> = new Map()

        const dfs = (subset: number[]) => {

            if (subset.length === nums.length) {
                ans.push(subset.slice()) //1,2,3
                return //
            }

            for(let i = 0; i < nums.length; i++) {
                if(!picked.has(i)) {
                    subset.push(nums[i])
                    picked.set(i, true)
                    dfs(subset)
                    subset.pop()
                    picked.delete(i)
                }
            }
        }

        dfs([])
        return ans
    }
}
