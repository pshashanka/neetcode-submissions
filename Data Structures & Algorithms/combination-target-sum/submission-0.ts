class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums: number[], target: number): number[][] {
        const ans = []
        this.dfs(nums, 0, [], target, ans)
        return ans
    }

    dfs(nums, i, subset, target, res) {

        if(target === 0) {
            res.push(subset.slice())
            return
        } else if (target < 0 || i >= nums.length) {
            return
        } else{
            subset.push(nums[i])
            this.dfs(nums, i, subset, target - nums[i], res)
            subset.pop()
            this.dfs(nums, i+1, subset, target, res)
        }
    }
}
