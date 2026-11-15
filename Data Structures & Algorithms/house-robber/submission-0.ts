class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {

        const memo = new Map<number, number>()

        const dfs = (i: number) => {
            if (i >= nums.length) {
                return 0
            }

            if(memo.has(i)) {
                return memo.get(i)
            }   

            const max = nums[i] + Math.max(dfs(i+2), dfs(i+3))
            memo.set(i, max)
            return max
        }

        return Math.max(dfs(0), dfs(1))
    }
}
