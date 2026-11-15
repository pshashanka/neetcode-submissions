class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {

        function binarySearch(
            start: number,
            end: number,
            search: number): number {

            if (start > end) return -1
            const mid = Math.floor((start + end) / 2)

            if (numbers[mid] === search) {
                return mid;
            }

            if (numbers[mid] > search) {
                return binarySearch(start, mid - 1, search)
            } else {
                return binarySearch(mid + 1, end, search)
            }
        }

        for (let i = 0; i < numbers.length; i++) {
            const search = target - numbers[i]
            const res = binarySearch(i+1, numbers.length - 1, search)
            if (res >= 0 && res != i) {
                return [i + 1, res + 1]
            }
        }
        return []
    }
}
