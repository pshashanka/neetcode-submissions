class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums.sort((l, r) => l - r)
        const ans = []

        for (let a = 0; a < nums.length; a++) {

            if (nums[a] > 0) {
                break
            } 

            if (a > 0 && nums[a] === nums[a - 1]) {
                continue
            }

            for (let b = a + 1, c = nums.length - 1; b < c;) {
                const res = nums[a] + nums[b] + nums[c]
                if (res === 0) {
                    ans.push([nums[a], nums[b], nums[c]])
                    b++
                    c--
                    while (b < c && nums[b] === nums[b - 1]) {
                        b++;
                    }                    
                } else {
                    if (res > 0) {
                        c--
                    } else {
                        b++
                    }

                }
            }
        }

        return ans
    }
}
