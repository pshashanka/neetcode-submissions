class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minB = Number.MAX_SAFE_INTEGER, maxP = 0;
        for(const price of prices) {
            minB = Math.min(price, minB)
            maxP = Math.max(maxP, (price - minB))
        }

        return maxP
    }
}
