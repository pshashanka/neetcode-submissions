class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits: string): string[] {
        const ans = []
        if (digits.length === 0) return ans;
        const digitToChar = {
            2: 'abc',
            3: 'def',
            4: 'ghi',
            5: 'jkl',
            6: 'mno',
            7: 'qprs',
            8: 'tuv',
            9: 'wxyz',
        };        


        const dfs = (i: number, subset: string) => {
            if(subset.length >= digits.length) {
                ans.push(subset)
                return
            }

            for(const c of digitToChar[digits[i]]) {
                dfs(i + 1, subset + c)
            }


        }


        dfs(0, '')
        return ans
            
    }
}
