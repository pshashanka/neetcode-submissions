class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const numSet = new Set<number>(nums)
        let longest = 0

        for(const num of nums) {
            let current = num
            if(numSet.has(current-1)){
                continue
            }

            let len = 0
            while(numSet.has(current)) {
                current++
                len++    
            }

            longest = Math.max(longest, len)
        }

        return longest
    }
}
