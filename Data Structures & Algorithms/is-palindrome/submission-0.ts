class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const arrS = []
        for(const c of s){
            if(c.match(/^[a-z0-9]+$/i)) {
                arrS.push(c.toLowerCase())
            }
        }
        const normalized = arrS.join()
        const reversed = arrS.reverse().join()
        return normalized === reversed
    }
}
