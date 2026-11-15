class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const __map = new Map<number, number>()
        for(const n of nums){
            if(__map.has(n)) {
                __map.set(n, __map.get(n) + 1)
            } else {
                __map.set(n, 1)
            }
        }
        
        const keys = [... __map.keys()]
        const sorted = keys.sort((a,b) => __map.get(b) - __map.get(a))
        console.log(sorted)
        return sorted.slice(0,k);
    }
}
