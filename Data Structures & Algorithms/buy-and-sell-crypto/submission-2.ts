class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0;

        for(let b = 0, s = 1; s < prices.length; ) {

            if(prices[s] >= prices[b]){
                const curr = prices[s] - prices[b]
                max = Math.max(max, curr)
            } else {
                b = s
            }
            s++
        }

         return max;   
    }
}
