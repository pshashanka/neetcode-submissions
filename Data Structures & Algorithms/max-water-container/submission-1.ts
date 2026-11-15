class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {

        let maxArea = 0;
        for (let i = 0, j = heights.length - 1; i < heights.length && j >= 0; ) {
            const w = j - i;
            const h = Math.min(heights[i], heights[j])
            const area = w * h
            maxArea = Math.max(maxArea, area)
            if (heights[i] <= heights[j]) {
                i++
            } else {
                j--;
            }

        }

        return maxArea
    }
}
