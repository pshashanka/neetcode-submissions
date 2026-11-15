class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums: number[]): number[][] {
        const ma = new Map<string, number[]>()

        const addToMap = (sub: number[]) => {
            const k = sub.sort((a,b) => a - b).join('|')
            ma.set(k, sub)
        }

        const dfs = (i: number, subset: number[]) => {
            console.log(i, subset)
            if(i >= nums.length) {
                addToMap(subset.slice())
                return
            }

            subset.push(nums[i])
            dfs(i+1, subset)
            subset.pop()
            dfs(i+1, subset)
        }

        dfs(0, [])
        console.log(ma)
        return [...ma.values()]
    }
}