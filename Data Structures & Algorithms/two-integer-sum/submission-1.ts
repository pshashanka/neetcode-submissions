class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const __map = {}
        let ans = [];
        for(let i = 0; i < nums.length; i++) {
           
            const diff = target - nums[i];
            if(__map[diff] >= 0) {
                const found = __map[diff];
                ans = [found, i];
                return ans;
            }
             __map[nums[i]] = i; 
        }

        return ans;
    }
}
