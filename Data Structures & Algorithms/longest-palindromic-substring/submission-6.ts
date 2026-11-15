class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {

        let maxStr = s[0]
        const n = s.length
        const memo = new Int8Array(n * n)

        const isPalindrome = (b: number, e: number): boolean => {
            const key = b * n + e
            if (memo[key] !== 0) return memo[key] === 1
            const res = s[b] === s[e] && (e - b <= 1 || isPalindrome(b + 1, e - 1))
            memo[key] = res ? 1 : -1
            return res
        }


        for(let b = 0; b < s.length; b++) {
            for(let i = s.length-1; i >= b + maxStr.length ; i--) {
                if(isPalindrome(b,i)) {
                    maxStr = s.substring(b, i+1)
                    break
                }
            }
        }
            
        return maxStr
    }
}
