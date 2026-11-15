class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const ans = []
        candidates.sort((a,b) => a - b)

        const dfs = (i: number, diff: number, subset: number[]) => {
            if(diff ===  0) {
                ans.push(subset.slice())
                return
            }

            if(diff < 0 || i >= candidates.length){
                return
            }

            if(diff >= 0) {
                subset.push(candidates[i])
                dfs(i+1, diff - candidates[i], subset)
                subset.pop()
                let j = i+1
                while(candidates[i] === candidates[j]) {
                    j++
                }
                dfs(j, diff, subset)
            }
        }

        dfs(0, target, [])
        return ans
    }
}
