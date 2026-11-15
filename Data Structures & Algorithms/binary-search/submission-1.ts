class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        const fbin = (start: number, end: number): number => {
            // console.log(start, end)
            if ((start > end)) {
                return -1
            }

            const mid = Math.floor((start + end) / 2)

            if (target > nums[mid]) {
                return fbin(mid+1, end)
            }

            if (target < nums[mid]) {
                return fbin(start, mid-1)
            }

            return mid
        }

        return fbin(0, nums.length -1)

    }
}
