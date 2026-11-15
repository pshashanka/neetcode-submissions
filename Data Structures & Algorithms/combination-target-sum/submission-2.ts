class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const ans = []
        nums.sort((a,b) => a-b)

        const dfs = (i: number, diff: number, subset: number[]) => {
            if(diff === 0) {
                ans.push(subset.slice())
                return
            }

            if (diff < 0 || i >= nums.length) {
                return
            }

            
            subset.push(nums[i])
            dfs(i, diff - nums[i], subset)
            subset.pop()
            dfs(i+1, diff, subset)

        }

        dfs(0, target, [])
        return ans
    }
}
