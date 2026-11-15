class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        const fbin = (start: number, end: number) => {
            if(start > end ) {
                return -1
            }

            const mid = Math.floor((start + end) / 2)

            if (target < nums[mid]) {
                return fbin(start, mid - 1)
            }

            if (target > nums[mid]) {
                return fbin(mid+1, end)
            }

            return mid
        }

        const fpivot = (start: number, end: number) => {

            if (start > end ) {
                return -1
            }

            const mid = Math.floor((start + end) / 2)

            if (nums[mid - 1] > nums[mid]) {
                return mid
            }

            const right = fpivot(mid + 1, end)
            const left = fpivot(start, mid - 1)

            if (left !== -1) {
                return left
            }

            if (right !== -1) {
                return right
            }


            return -1
        }        

        const pivot = fpivot(0, nums.length - 1)
        if (pivot !== -1) {
            console.log(pivot)
            if (nums[pivot] === target) {
                return pivot
            }
            const left = fbin(0, pivot -1)
            const right = fbin(pivot +1, nums.length - 1)
            if (left != -1) {
                return left
            }
            if (right != -1) {
                return right
            }

            return -1
        } 

        return fbin(0, nums.length - 1)
    }

    
}
