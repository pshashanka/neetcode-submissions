class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const ans = []   

        const dfs = (left: number, right: number, subset: string[]) => {
            if(left == right && left == n) {
                ans.push(subset.slice().join(''))
                return 
            }

            if (left < n) {
                subset.push('(')
                 dfs(left + 1, right, subset)
                 subset.pop()
            }
            
            if (right < left) {
                subset.push(')')
                 dfs(left, right+1, subset)
                 subset.pop()
            }            
        }

        dfs(0,0,[])
        console.log(ans)
        return ans
    }
}
