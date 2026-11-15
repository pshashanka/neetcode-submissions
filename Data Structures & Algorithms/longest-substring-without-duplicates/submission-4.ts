class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let l = 0, ans = 0;
        const _map = new Map()
        
        for(let r = 0; r < s.length; r++) {

                if(_map.has(s[r])) {
                    l = Math.max(_map.get(s[r]) + 1, l)
                }
                _map.set(s[r], r)
                ans = Math.max(ans, r-l + 1)
        }

        return ans
    }
}
