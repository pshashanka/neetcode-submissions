class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const keys = {}
        for(const num of nums){
            if(keys[num]) {
                return true;
            }
            keys[num] = 1;
        }
        return false;
    }
}
